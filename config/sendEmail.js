const nodemailer = require("nodemailer");
require('dotenv').config()

const sendEmail = async (email, subject, text) => {
    try {
        PORT = process.env.EMAILPORT|587;
        const transporter = nodemailer.createTransport({
            host: process.env.EMAILHOST,
            // service: process.env.SERVICE,
            port: PORT,
            secure: false,
            auth: {
                user: process.env.EMAILID,
                pass: process.env.EMAILPASS,
            },
            // secureConnection: 'false',
            // tls: {
            //     ciphers: 'SSLv3',
            //     rejectUnauthorized: false
            // }
        });

        await transporter.sendMail({
            from: "Probliz",
            to: email,
            subject: subject,
            text: text,
        });

        console.log("email sent sucessfully");
    } 
    catch (error) 
    {
        console.log(error, "email not sent");
    }
};

module.exports = sendEmail;
