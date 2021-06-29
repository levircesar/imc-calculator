/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import { Wrapper, ButtonUp, ButtonWhats, Container } from '../styles/index'
import {
  FaPhoneSquare,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaArrowUp,
  FaBars,
  FaTimes,
  FaSave,
  FaMoon,
  FaSun
} from 'react-icons/fa'
import Slider from 'react-slick'
import ShowButton from '../components/ShowButton'
import config from 'react-reveal/globals'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import emailjs from 'emailjs-com'
import Recaptcha from 'react-recaptcha'
import { ThemeProvider } from 'styled-components'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'
import { useForm, Controller } from 'react-hook-form'
import InputMask from 'react-input-mask'

import { useRouter } from 'next/router'

config({ ssrFadeout: true })

export default function Home() {
  const [recaptcha, setRecaptcha] = useState(false)

  function handleEmail(e) {
    e.preventDefault()

    if (recaptcha) {
      emailjs
        .sendForm(
          'service_6lj8gaa',
          'template_ipbi0ow',
          e.target,
          'user_N8Sp00kGfkcoc3DdL4xah'
        )
        .then(
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          result => {
            alert('Email enviado com sucesso!')
          },
          error => {
            console.log(error.text)
            alert('Ocorreu um erro no envio')
          }
        )
      e.target.reset()
    } else {
      alert('Confirme o Recaptcha')
    }
  }
  const callback = function () {
    console.log('Done!!!!')
  }

  return (
    <Container>
      <Wrapper>
        <Head>
          <title>ModernizaWeb | Website</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>

        <div className="contato-section flex">
          <div className="contato">
            <form id="form" style={{ width: '100%' }} onSubmit={handleEmail}>
              <h4>Nome: *</h4>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Seu nome"
                required
              />
              <h4>Email: </h4>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Seu email"
              />
              <h4>Telefone: *</h4>
              <input
                id="number"
                name="number"
                type="text"
                placeholder="Seu Telefone"
              />

              <h4>Mensagem: *</h4>
              <textarea
                id="message"
                name="message"
                placeholder="Digite sua mensagem"
                required
              />
              <h4>Marque o Recaptcha *</h4>
              <div className="recaptcha flex">
                <Recaptcha
                  sitekey="6LdPVR4bAAAAAE7p0NCTuceCRuJpR1CCuwOZmdiK"
                  render="explicit"
                  onloadCallback={callback}
                  verifyCallback={() => setRecaptcha(true)}
                  hl="pt-BR"
                />
              </div>
              <input type="submit" value="Enviar" />
            </form>
          </div>
          <div className="maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3981567647156!2d-38.562955285872576!3d-3.723040344186252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7498fa5c99fef%3A0x796c410a7d2d61b!2sRua%20Henrique%20Elery%2C%20400%20-%20Monte%20Castelo%2C%20Fortaleza%20-%20CE%2C%2060320-410!5e0!3m2!1spt-BR!2sbr!4v1623172858005!5m2!1spt-BR!2sbr"
              style={{ border: '0' }}
              loading="lazy"></iframe>
          </div>
        </div>

        <div className="footer">
          <div className="footer-block">
            <h2>Telefone/Email</h2>
            <p>
              (85)99841-3146
              <br />
              levirlemos@gmail.com
            </p>
          </div>
          <div className="footer-block">
            <h2>Social</h2>
            <div className="icones">
              <a href="https://api.whatsapp.com/send?phone=5585998413146&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20ModernizaWeb">
                <FaWhatsapp />
              </a>
              <a href="https://www.facebook.com/levir.lemos/">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/levirlms/">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="footer-block">
            <h2>Endereço</h2>
            <p>
              Rua Henrique Ellery, 400
              <br />
              CEP - 60320410 , Fortaleza / Ceara
            </p>
          </div>
        </div>

        <div className="footer2">
          <h4>2021 - Todos os direitos reservados!</h4>
          <p>
            Desenvolvido por{' '}
            <a href="https://www.instagram.com/levirlms/">LevirLemos</a>
          </p>
        </div>
      </Wrapper>
    </Container>
  )
}
