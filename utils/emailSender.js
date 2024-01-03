var nodemailer = require('nodemailer');
function iniciarCorreo(){
    var transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: process.env.PORTEMAIL,
        secure: false, // upgrade later with STARTTLS
        auth: {
          user: process.env.USER,
          pass: process.env.PASSWORD,
        },
      });
    
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages");
        }
      });
      return transporter;
  }

  module.exports = {
    iniciarCorreo
  }