import {google} from 'googleapis'
import dotenv from 'dotenv';
dotenv.config();


const Google_client_id = process.env.CLIENT_ID;
const Google_client_secret = process.env.CLIENT_SECRET;

console.log(Google_client_id)
console.log(Google_client_secret)

exports.Oauth2client = new google.auth.oAuth2(
    Google_client_id,
    Google_client_secret,
    'postmessage'
)