// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const nodemailer = require('nodemailer')

require('dotenv').config('../../.env')

async function main(from , to, subject ,text, html="<br/>") {
  

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
    text,
    html
  });

  return info
}

export default async function messageAPI(req, res) {
  

  const {email, subject, message} = req.body
  // let redirectUrl = (() => subscription !== undefined ? `/thankyou?subscription=${subscription}` : "/thankyou?sent=true" )(); 
  // const { subscription } = req.query

  let redirectUrl



  try {
    const resp = await main(
      email,
      'enquiries@eshcolventures.co.ke', // enquiries@eshcolventures.co.ke
      subject,
      message 
      )

      if(resp.response.includes('OK')) 
      {
        redirectUrl = "/thankyou?sent=true"
      }else{ 
        redirectUrl = "/thankyou?sent=false"
      }
  
  } catch (error) {
    redirectUrl = "/thankyou?sent=false"
    console.error(error)
  }

  res.status(200).redirect(redirectUrl)

}
