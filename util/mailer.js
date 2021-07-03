const nodemailer = require("nodemailer");
require("dotenv").config();

const welcomeMail = async (to, nm) => {
  const transporter = await nodemailer.createTransport({
    host: "srv76.niagahoster.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = await {
    from: process.env.SENDER, //SENDER ADDRESS
    to: to, //list of receivers
    subject: `Hello ${nm}`, //SUBJECT LINE
    html: `
            <h1>Welcome ${nm}</h1>
            <p>
                lorem ipsum dot sit al
                
            <br>
            Thank you :)
            </p>

            <a href="https://youtebe.com" style="
                text-decoration : none;
                color : inherit;
            ">
            <button style="
                border : none;
                outline : none;
                padding : 5px 10px;
                background-color : red;
                color : white;
                font-size : 1rem;
            ">Verified account</button>
            <a/>

        `, //plain text body
  };

  return transporter.sendMail(mailOptions, function (err, info) {
    if (err) console.error(err);
    else console.log(info);
  });
};

module.exports = { welcomeMail };
