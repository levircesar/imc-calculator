/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import Head from 'next/head'
import { Wrapper, Container, Title } from '../styles/index'
import config from 'react-reveal/globals'
import Fade from 'react-reveal/Fade'

config({ ssrFadeout: true })

export default function Sobre() {
  function handleContato() {
    const url =
      'https://api.whatsapp.com/send?phone=5585998413146&text=Ol%C3%A1%2C%20tenho%20uma%20sugest%C3%A3o%20para%20o%20Oque-eu-mando'
    window.open(url, '_blank')
  }

  return (
    <Wrapper>
      <Head>
        <title>IMC - Calculator - Sobre</title>
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
        <Fade right>
          <div className="w40 flex">
            <img src="robot.png" alt="sei nao" />
          </div>
        </Fade>
        <Fade left>
          <div className="w60 flex column">
            <div className="quiz flex column">
              <Title>
                <h2>
                  Sobre o <span>Autor</span>
                </h2>
                <p>
                  Olá, me chamo Levir Lemos e sou graduando em Engenharia de
                  Computação na Universidade Federal do Ceara (UFC) . A paixão
                  por tecnologia me levou a ingressar em 2017 na faculdade ,
                  onde aprendi muito com pessoas altamente capacitadas. Atuo
                  como desenvolvedor Fullstack com ênfase em desenvolvimento
                  Front-End.
                </p>
              </Title>

              <div className="buttons">
                <button onClick={handleContato}>Contato</button>
              </div>
            </div>
          </div>
        </Fade>
      </Container>
    </Wrapper>
  )
}
