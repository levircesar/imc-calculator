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
    <Wrapper>
      <Container>
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
        <div>
          <h2>salve salve pagina sobre</h2>
          <p>texto aleatorio</p>
        </div>
      </Container>
    </Wrapper>
  )
}
