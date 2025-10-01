import nodemailer from "nodemailer";
import { google } from "googleapis";
import {
    MAIL_USERNAME, 
    OAUTH_CLIENTID,
    OAUTH_CLIENT_SECRET, 
    OAUTH_REFRESH_TOKEN 
} from "../env";
import {EmailData} from "../types/email.types";
import {mailingUser, mailingAdmin} from "../utils/mailing";



const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    OAUTH_CLIENTID,
    OAUTH_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
    refresh_token: OAUTH_REFRESH_TOKEN
})

const getAccessToken = async (): Promise<string> => {
    try{
        const res = await oauth2Client.getAccessToken();
        if (!res.token) {
            throw new Error ("No se pudo obtener el token de acceso. Error en Servicio de Google");
        }
        return res.token;
    }catch(error){
        console.log(error);
        throw new Error ("No se pudo obtener el token de acceso. Error en Servicio de Google");
    }
}

export const sendEmail = async(
    EmailData:EmailData
)=>{
    try {
        const accessToken = await getAccessToken();
        const transporter = nodemailer.createTransport({
            host:"smtp.gmail.com",
            port:465,
            secure:true,
            auth:{
                type:"OAuth2",
                user:MAIL_USERNAME,
                clientId:OAUTH_CLIENTID,
                clientSecret:OAUTH_CLIENT_SECRET,
                refreshToken:OAUTH_REFRESH_TOKEN,
                accessToken:accessToken
            }
        })
        const mailToAdmin ={
            from: `"${EmailData.name}" <${EmailData.email}>`,
            to:MAIL_USERNAME,
            subject:"Nuevo mensaje desde el Portfolio a tu correo DEV",
            html:`
                ${mailingAdmin.html.toString().replace("{{name}}",EmailData.name).replace("{{message}}",EmailData.message).replace("{{email}}",EmailData.email).replace("{{phone}}",EmailData.phone)}
            `
        }
        const mailToUser = {
            from:MAIL_USERNAME,
            to:EmailData.email,
            subject:"Gracias por contactarme",
            html:`${mailingUser.html.toString().replace("{{name}}",EmailData.name).replace("{{message}}",EmailData.message)}`
        }

        const infoAdmin = await transporter.sendMail(mailToAdmin);
        const infoUser = await transporter.sendMail(mailToUser);
        // LOG PARA DESARROLLO console.log("Correo enviado", infoAdmin.messageId, infoUser.messageId);
        

        return {success:true, message:"Email enviado con exito"};

    } catch (error) {
        console.log(error);
        return {success:false, message:"Error al enviar el email. Servicio de Google"}
    }
}