/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import { Wrapper, Container } from '../styles/index'
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
  const [name, setName] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [imcValor, setimcValor] = useState(false)
  const [check, setCheck] = useState(false)

  useEffect(() => {
    if (name != '') {
      document.getElementById('name').style.outline = '3px solid green'
    } else {
      document.getElementById('name').style.outline = '3px solid red'
    }
    if (weight != '' && weight != 'NaN') {
      document.getElementById('weight').style.outline = '3px solid green'
    } else {
      document.getElementById('weight').style.outline = '3px solid red'
    }
    if (height != '' && height != 'NaN') {
      document.getElementById('height').style.outline = '3px solid green'
    } else {
      document.getElementById('height').style.outline = '3px solid red'
    }
    if (
      name != '' &&
      weight != '' &&
      weight != 'NaN' &&
      height != '' &&
      height != 'NaN'
    ) {
      setCheck(true)
    } else {
      setCheck(false)
    }
  }, [name, height, weight])

  function resultValue(name, valor) {
    if (valor < 18.5) {
      alert(`
        ${name} seu IMC é ${valor}, Abaixo de 18.5 Abaixo do Peso Você está abaixo do peso
        ideal. Isso pode ser apenas uma característica pessoal, mas também pode
        ser um sinal de desnutrição ou de algum problema de saúde. Caso esteja
        perdendo peso sem motivo aparente, procure um médico.
        `)
    }
    if (valor >= 18.5 && valor < 24.9) {
      alert(`
        ${name} seu IMC é ${valor}, Abaixo de 24.9
        Peso Normal
        Parabéns, você está com o peso normal. Recomendamos que mantenha hábitos 
        saudáveis em seu dia a dia. Especialistas sugerem ingerir de 4 a 5 porções
         diárias de frutas, verduras e legumes, além da prática de exercícios 
         físicos - pelo menos 150 minutos semanais
        `)
    }
    if (valor >= 25.0 && valor < 29.9) {
      alert(`
        ${name} seu IMC é ${valor},
        IMC entre 25.0 e 29.9
        Sobrepeso
        Atenção! Alguns quilos a mais já são suficientes para que algumas pessoas 
        desenvolvam doenças associadas, como diabetes
        e hipertensão. É importante rever seus hábitos. Procure um médico.
        `)
    }
    if (valor >= 30 && valor < 34.9) {
      alert(`
        ${name} seu IMC é ${valor},
        IMC entre 30.0 e 34.9
        Obesidade grau I
        Sinal de alerta! O excesso de peso é fator de risco para desenvolvimento 
        de outros problemas de saúde. A boa notícia é que uma pequena perda de 
        peso já traz benefícios à saúde. Procure um médico para definir o tratamento 
        mais adequado para você.
        `)
    }
    if (valor >= 35 && valor < 39.9) {
      alert(`
        ${name} seu IMC é ${valor},
        IMC entre 35.0 e 39.9
        Obesidade grau II
        Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas
        está entre alto e muito alto. Busque ajuda de um profissional de saúde; 
        não perca tempo
        `)
    }
    if (valor >= 40) {
      alert(`
        ${name} seu IMC é ${valor},
        IMC acima de 40
        Obesidade grau III
        Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças 
        associadas é muito alto. Busque ajuda de um profissional de saúde;
        não perca tempo
        `)
    }
  }

  function handleDefault() {
    setName('')
    setHeight('')
    setWeight('')
    document.getElementById('name').innerHTML = ''
    document.getElementById('weight').innerHTML = ''
    document.getElementById('height').innerHTML = ''

    setimcValor(false)
  }
  const submitValue = () => {
    if (check) {
      const details = {
        name: name,
        weight: parseFloat(weight.split(',').join('.')),
        height: parseFloat(height.split(',').join('.'))
      }

      const imc = (details.height / (details.weight * details.weight)).toFixed(
        2
      )
      const valor = Math.round(parseFloat(imc) * 10) / 10
      setimcValor(true)
      resultValue(details.name, valor)
    }
  }
  return (
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

      <Container>
        <div className="w60 flex column">
          <div className="quiz flex column">
            <h1>Bem Vindo a Calculadora de IMC</h1>
            <h3>Preencha os Dados</h3>
            <input
              className="input"
              type="text"
              name="name"
              id="name"
              value={name}
              placeholder="Digite seu nome..."
              onChange={e => setName(e.target.value)}
            />
            <InputMask
              className="input"
              mask="9,99"
              name="weight"
              id="weight"
              value={weight}
              placeholder="Altura(m)"
              onChange={e => setWeight(e.target.value)}
            />
            <input
              className="input"
              type="number"
              name="height"
              id="height"
              value={height}
              placeholder="Peso(Kg)"
              onChange={e => setHeight(e.target.value)}
            />
            <div>
              {imcValor ? (
                <button onClick={handleDefault}>Zerar</button>
              ) : (
                <button onClick={submitValue}>Calcular</button>
              )}
              {imcValor && (
                <a href="https://api.whatsapp.com/send?phone=5585998413146&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20ModernizaWeb">
                  <button onClick={submitValue}>Ajuda</button>
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="w40 flex">
          <img src="robot.svg" alt="sei nao" />
        </div>
      </Container>
    </Wrapper>
  )
}
