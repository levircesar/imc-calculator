import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default function sendMail(req: NextApiRequest, res: NextApiResponse) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('dotenv').config()
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD
    }
  })

  transporter
    .sendMail({
      from: `"ModernizaWeb -" <levirlemos@gmail.com>`,
      to: 'levirlemos@gmail.com',
      replyTo: req.body.email,
      subject: 'CONTATO ATRAVÉS DO SITE MODERNIZAWEB',
      text: req.body.message,
      html: `<span>
            <h4>Nome:</h4> ${req.body.name}
            </span>
            <br />
            <span>
              <h4>Email:</h4> ${req.body.email}
            </span>
            <br />
            <span>
              <h4>Telefone:</h4> ${req.body.number}
            </span>
            <br />
            <h4>Mensagem:</h4>
            <p>${req.body.message}</p>
            <br />`
    })
    .then(response => {
      res.send(response)
    })
    .catch(error => {
      res.send(error)
    })
}

{
  /*NO FRONT END 
  function sendMail() {
    const form = document.getElementById('form')
    form.addEventListener('submit', e => {
      e.preventDefault()

      const name = (document.getElementById('name') as HTMLInputElement).value
      const email = (document.getElementById('email') as HTMLInputElement).value
      const number = (document.getElementById('number') as HTMLInputElement)
        .value
      const message = (document.getElementById('message') as HTMLInputElement)
        .value

      fetch('/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          number,
          message
        })
      })
        .then(response => {
          alert('Email enviado com sucesso!')
        })
        .catch(error => {
          alert('Ocorreu um erro no envio')
        })
    })
  }*/
}
