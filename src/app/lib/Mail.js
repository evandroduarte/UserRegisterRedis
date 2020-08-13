const nodemailer = require('nodemailer');
const { host, port, user, pass } = require('../../config/mail.js');

const  transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass },
    tls: {rejectUnauthorized: false}
})


module.exports = transport;