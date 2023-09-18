const express = require('express')
const sendMail = require('../MailOwner.js')
const cors = require('cors')
const serverless =require('serverless-http') 

const app = express()
const port = 5000

app.use(express.json())
app.use(cors())

app.post('/.netlify/functions/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    try {
        sendMail(name, email, message)
        res.status(200).send('Email sent successfully');
    }
    catch (err) {
<<<<<<< HEAD
        res.status(500).send('Error sending email');
=======
        res.status(500).send({'Error sending email'});
>>>>>>> c204ca14111beecf197278f48e39232b97abf552
    }
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

module.exports = app
module.exports.handler = serverless(app)
