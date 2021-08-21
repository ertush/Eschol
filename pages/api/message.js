// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const nodemailer = require('nodemailer')

require('dotenv').config('../../.env')

async function main(from , to, subject ,text, firstName, lastName, phone) {
  

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS, 
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from, 
    to,
    subject,
    text: `
          Dear Sir/Madam,

          ${text}

          Kind Regards

          ${firstName} ${lastName}
          ${phone}

          `
  });

  return info
}

export default async function messageAPI(req, res) {
  

  const {firstName, lastName, phone, email, subject, message} = req.body

  const { subscription } = req.query

  let redirectUrl

  try {

    if(subscription !== undefined){
        redirectUrl = `/thankyou?subscription=${subscription}`

        const resp = await main(
          email,
          'eromtush@gmail.com', // enquiries@eshcolventures.co.ke
          'Subscribed to Updates from Eschol Ventures Ltd',
          `I here by consent to receiving any news and updates from Eschol Ventures limited via this email
           ${email}`,
          '',
          '',
          '' 
          )

          if (resp.response.includes("OK")) {
            redirectUrl = "/thankyou?subscription=true";
          } else {
            redirectUrl = "/thankyou?subscription=false";
          }
    }
    else{
      const resp = await main(
        email,
        'eromtush@gmail.com', // enquiries@eshcolventures.co.ke
        subject,
        message,
        firstName,
        lastName,
        phone 
        )

        if (resp.response.includes("OK")) {
          redirectUrl = "/thankyou?sent=true";
        } else {
          redirectUrl = "/thankyou?sent=false";
        }
    }
    

      
  
  } catch (error) {
    redirectUrl = "/thankyou?sent=false"
    console.error(error)
  }

  res.status(200).redirect(redirectUrl)

}
