const { google } = require("googleapis");
require("dotenv").config();


const clientId = process.env.GOOGLE_CLIENT_ID
const clientSecret = process.env.GOOGLE_CLIENT_SECRET

const oauth2Client = new google.auth.OAuth2(clientId, clientSecret);

const createEvent = (accessToken: String, refreshToken: String, expiryDate: Date, start: Date, end: Date)=>{
    oauth2Client.setCredentials({
        access_token: accessToken,
        refresh_token: refreshToken,
        expiry_date: expiryDate,
    });

    const calendar = google.calendar({ version: "v3", oauth2Client });

    const eventToCreate = {
        summary: 'Test event',
        description: "Google add event testing.",
        start: {
          dateTime: start,
          timeZone: 'West Africa Time',
        },
        end: {
          dateTime: end,
          timeZone: 'West Africa Time',
        },
      };

    calendar.events.insert({
        auth: oauth2Client,
        calendarId: "primary",
        resource: eventToCreate,
      })
      .then((event: any) =>  console.log('Event created: %s', event.htmlLink))
      .catch((error: Error) => console.log('Some error occured', error));

}
