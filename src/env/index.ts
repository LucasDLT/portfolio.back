import 'dotenv/config';

export const PORT = process.env.PORT || 3000

export const MAIL_USERNAME = process.env.MAIL_USERNAME || "";
export const OAUTH_CLIENTID = process.env.OAUTH_CLIENTID;
export const OAUTH_CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET;
export const OAUTH_REFRESH_TOKEN = process.env.OAUTH_REFRESH_TOKEN;

export const RECAPTCHA_SITE_KEY = process.env.SITE_KEY; 
export const RECAPTCHA_SECRET_KEY = process.env.SECRET_KEY;