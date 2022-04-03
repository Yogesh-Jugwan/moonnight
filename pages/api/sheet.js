import { google } from 'googleapis';

async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, number, message } = req.body;
        console.log(name, email, number, message);

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.CLIENT_EMAIL,
                client_id: process.env.CLIENT_ID,
                private_key: process.env.PRIVATE_KEY,
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets',
            ],
        });

        const sheets = google.sheets({
            auth,
            version: 'v4',
        });

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.DATABASE_ID,
            range: 'Sheet1!A2:D',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[name,	email,	number,	message]],
            },
        });

        res.status(201).json({ message: 'It works!', response });
    }
    res.status(200).json({ message: 'Hey!' });
}

export default handler;