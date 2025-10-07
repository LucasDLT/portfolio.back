import { google } from "googleapis";
import oAuth2Client from "../utils/googleClient";
import {EmailData} from "../types/email.types";
import {mailingUser, mailingAdmin} from "../utils/mailing";
import {MAIL_USERNAME} from "../env";


const gmail = google.gmail({version: "v1", auth: oAuth2Client});

//mensaje codificado en base 64, lo tuvimos que cambiar del que teniamos en nodemailer 
function base64UrlEncode(srt:string){
    return Buffer.from(srt)
    .toString("base64")
    .replace(/\+/g,"-")
    .replace(/\//g,"_")
    .replace(/=+$/,"");
}

//MIME del correo

function makeRawMessage(to:string, from:string, subject:string, html:string){
    const lines = [
        `To:${to}`,
        `From:${from}`,
        `Subject:${subject}`,
        `MIME-Version:1.0`,
        `Content-Type:text/html;charset="UTF-8"`,
        ``,
        html,
    ];
    return base64UrlEncode(lines.join("\r\n"));
}

//remplezo de placeholders 
function renderTemplate(template:string, data:Record<string, string>){
    return template.replace(/{{(.*?)}}/g,(_, key)=>data[key.trim()] || "")
}

//envio de correos

export const sendEmail = async (data:{
    name:string, email:string, phone:string, message:string
})=>{
try {
    //inyectamos los htmls hechos con mjml
    const adminHTML= renderTemplate(mailingAdmin.html, data)
    const userHTML= renderTemplate(mailingUser.html, data)

    //construccion del mensaje MIME
    const rawAdmin = makeRawMessage(
        MAIL_USERNAME,
        `"${data.name}"<${data.email}>`,
        "Nuevo mensaje desde tu portfolio",
        adminHTML
    )

    const rawUser = makeRawMessage(
        data.email,
        `"${data.email}"<${MAIL_USERNAME}>`,
        "Gracias por tu mensaje",
        userHTML
    )

    // enviar con gmail api
    await gmail.users.messages.send({
        userId:"me",
        requestBody:{raw:rawUser}
    })
    return{success:true}
} catch (error) {
    console.error("Error al enviar el correo:",error)
    return{success:false, error:error}
}
}