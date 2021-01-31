import nodemailer from 'nodemailer'
const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'sircnujnuj@hotmail.com',
    pass: process.env.password,
  },
})

export default function handler(req, res) {
  const { name, message, email } = req.body
  if (req.method === 'POST') {
    const mailOptions = {
      from: 'sircnujnuj@hotmail.com',
      to: 'sircnujnuj@gmail.com',
      subject: `Work offer by ${name}`,
      html: `<h2> From: ${email}</h1>
      <p>${message}</p>
      `,
    }
    transporter.sendMail(mailOptions, (err) => {
      if (err) return res.status(400).send('Email not sent')
      return res.send('Email sent')
    })
  }
}
