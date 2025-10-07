import { google } from "googleapis";
import { OAUTH_CLIENTID,
OAUTH_CLIENT_SECRET,
OAUTH_REFRESH_TOKEN} from '../env';


const oAuth2Client = new google.auth.OAuth2(
    OAUTH_CLIENTID,
    OAUTH_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
);

oAuth2Client.setCredentials({
    refresh_token: OAUTH_REFRESH_TOKEN
})
export default oAuth2Client