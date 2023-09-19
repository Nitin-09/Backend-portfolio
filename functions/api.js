const express = require('express');
const sendMail = require('../Mail.js');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();


app.use(express.json());
app.use(cors());

app.post('/.netlify/functions/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    try {
        let msg = await sendMail(name, email, message);
        console.log(msg);
        res.status(200).json({ status: 'Success', message: 'Email sent successfully.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while sending the email.' });
    }
});

module.exports = app;
module.exports.handler = serverless(app);
