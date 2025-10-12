import { Request, Response, NextFunction } from 'express';
import { RECAPTCHA_SECRET_KEY } from '../env';

export const recaptcha = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const token = (req.body && (req.body.recaptcha || req.body.recaptchaToken)) || req.headers["x-recaptcha-token"]
        if (!token) {
            return res.status(400).json({message:"Token de reCAPTCHA faltante"})
        }
        
        const verifyUrl= "https://www.google.com/recaptcha/api/siteverify"
        const params = new URLSearchParams();
        params.append("secret", RECAPTCHA_SECRET_KEY || "")
        params.append("response", String(token))

        const r = await fetch(verifyUrl, {
            method:"POST",
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            body:params.toString()
        })

        if (!r.ok) {
            console.error("reCAPTCHA verify request failed:", r.status, await r.text())
            return res.status(500).json({message:"Error verificando reCAPTCHA"})
        }
        
        const data = await r.json() as {
            success?:boolean;
            score?:number;
            action?:string;
            challenge_ts?:string;
            hostname?:string;
            ["error-codes"]?:string[]
        }

        const MIN_SCORE = 0.5
        if (!data.success) {
            return res.status(403).json({message:"reCAPTCHA invalido", details:data["error-codes"] || null})
        }

        if (typeof data.score === "number" && data.score < MIN_SCORE) {
        return res.status(403).json({ message: "reCAPTCHA: comportamiento sospechoso (score bajo)", score: data.score });
        }
        if (data.action !== "contact") {
        return res.status(403).json({ message: "reCAPTCHA: accion no permitida, se espera contact y se recibio:", action: data.action });
        }
        res.locals.recaptcha = {succes: data.success, score:data.score, action:data.action}

        next();

    } catch (error) {
        
        console.error("Error en el middleware del recaptcha:", error)
        return res.status(500).json({message:"Error interno al verificar el reCAPTCHA"})
    }


    };