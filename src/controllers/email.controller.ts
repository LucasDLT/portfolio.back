import {Request, Response} from "express";
import { sendEmail } from "../services/email.service";
import { EmailData } from "../types/email.types";

export const emailController = async (req: Request, res: Response)=>{
    try {
        const {name, email, message, phone} = req.body;

        if (!name || !email || !message || !phone) {
            res.status(400).json({
                message:"Faltan datos del formulario"
            })
            return;
        }
        const emailData:EmailData = {
            name,
            email,
            message,
            phone
        }
        const response = await sendEmail(emailData);
        console.log("Respuesta sendEmail:", response) ;


        if(response.success){
            res.status(200).json({
                message:"Email enviado correctamente"
            })
        }else{
            res.status(400).json({
                message:"Error al enviar el emai. Error en Controller de Google"
            })
        }
    } catch (error) {
        console.error("Error al enviar el email", error);
        res.status(500).json({
            message:"Error al enviar el email en controlador de Google"
        })
    }
}