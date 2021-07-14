/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Wrapper, Container, Title } from '../styles/index'
import config from 'react-reveal/globals'
import Fade from 'react-reveal/Fade'
import InputMask from 'react-input-mask'

config({ ssrFadeout: true })

export default function Home() {
  const [name, setName] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [imcValor, setimcValor] = useState(false)
  const [check, setCheck] = useState(false)
  const [formStep, SetFormStep] = useState(0)
  const [resultado, setResultado] = useState({
    number: '',
    details: '',
    result: ''
  })

  useEffect(() => {
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
      setResultado({
        number: valor,
        details: `
      ${name} ,você está abaixo do peso
      ideal. Isso pode ser apenas uma característica pessoal, mas também pode
      ser um sinal de desnutrição ou de algum problema de saúde. Caso esteja
      perdendo peso sem motivo aparente, procure um médico.
      `,
        result: 'Abaixo do Peso'
      })
    }
    if (valor >= 18.5 && valor < 24.9) {
      setResultado({
        number: valor,
        details: `
          ${name}, Parabéns, você está com o peso normal. Recomendamos que mantenha hábitos 
          saudáveis em seu dia a dia. Especialistas sugerem ingerir de 4 a 5 porções
           diárias de frutas, verduras e legumes, além da prática de exercícios 
           físicos - pelo menos 150 minutos semanais
          `,
        result: 'Peso Normal'
      })
    }
    if (valor >= 25.0 && valor < 29.9) {
      setResultado({
        number: valor,
        details: `
          ${name}, Atenção! Alguns quilos a mais já são suficientes para que algumas pessoas 
          desenvolvam doenças associadas, como diabetes
          e hipertensão. É importante rever seus hábitos. Procure um médico.
          `,
        result: 'Sobrepeso'
      })
    }
    if (valor >= 30 && valor < 34.9) {
      setResultado({
        number: valor,
        details: `
          ${name}, Sinal de alerta! O excesso de peso é fator de risco para desenvolvimento 
          de outros problemas de saúde. A boa notícia é que uma pequena perda de 
          peso já traz benefícios à saúde. Procure um médico para definir o tratamento 
          mais adequado para você.
          `,
        result: 'Obesidade grau I'
      })
    }
    if (valor >= 35 && valor < 39.9) {
      setResultado({
        number: valor,
        details: `
          ${name}, Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas
          está entre alto e muito alto. Busque ajuda de um profissional de saúde; 
          não perca tempo
          `,
        result: 'Obesidade grau II'
      })
    }
    if (valor >= 40) {
      setResultado({
        number: valor,
        details: `
          ${name}, Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças 
          associadas é muito alto. Busque ajuda de um profissional de saúde;
          não perca tempo
          `,
        result: 'Obesidade grau III'
      })
    }
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
      SetFormStep(4)
    }
  }
  return (
    <Wrapper>
      <Head>
        <title>IMC - Calculator</title>
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
            {formStep === 0 && (
              <div className="flex column">
                <Title>
                  <h2>
                    Calculadora de <span>IMC</span>
                  </h2>
                  <p>
                    Sua calculadora online para medir seu índice de massa
                    corporal
                  </p>
                </Title>

                <div className="buttons">
                  <button onClick={() => SetFormStep(formStep + 1)}>
                    Começar
                  </button>
                </div>
              </div>
            )}
            {formStep === 1 && (
              <Fade right>
                <div className="flex column">
                  <Title>
                    <h2>
                      Qual o seu <span>Nome</span>?
                    </h2>
                  </Title>
                  <input
                    className="input"
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    placeholder="Digite seu nome..."
                    onChange={e => setName(e.target.value)}
                  />
                  <div className="buttons">
                    <button onClick={() => SetFormStep(formStep - 1)}>
                      Voltar
                    </button>
                    <button onClick={() => SetFormStep(formStep + 1)}>
                      Próximo
                    </button>
                  </div>
                </div>
              </Fade>
            )}
            {formStep === 2 && (
              <Fade right>
                <div className="flex column">
                  <Title>
                    <h2>
                      Qual a sua <span>Altura</span>?
                    </h2>
                  </Title>
                  <InputMask
                    className="input"
                    mask="9,99"
                    name="weight"
                    id="weight"
                    value={weight}
                    placeholder="Altura(m)"
                    onChange={e => setWeight(e.target.value)}
                  />
                  <div className="buttons">
                    <button onClick={() => SetFormStep(formStep - 1)}>
                      Voltar
                    </button>
                    <button onClick={() => SetFormStep(formStep + 1)}>
                      Próximo
                    </button>
                  </div>
                </div>
              </Fade>
            )}
            {formStep === 3 && (
              <Fade right>
                <div className="flex column">
                  <Title>
                    <h2>
                      Qual o seu <span>Peso</span>?
                    </h2>
                  </Title>
                  <input
                    className="input"
                    type="number"
                    name="height"
                    id="height"
                    value={height}
                    placeholder="Peso(Kg)"
                    onChange={e => setHeight(e.target.value)}
                  />
                  <div className="buttons">
                    <button onClick={() => SetFormStep(formStep - 1)}>
                      Voltar
                    </button>
                    <button onClick={submitValue}>Calcular</button>
                  </div>
                </div>
              </Fade>
            )}
            {formStep === 4 && (
              <Fade right>
                <div className="flex column">
                  <Title>
                    <h2>
                      Seu IMC é: <span>{resultado.number}</span>
                    </h2>
                    <h4>{resultado.result}</h4>
                    <p>{resultado.details}</p>
                  </Title>

                  <div className="buttons">
                    <button onClick={() => SetFormStep(formStep - 1)}>
                      Voltar
                    </button>
                    {imcValor && (
                      <a href="https://www.tuasaude.com/calculadora/imc/">
                        <button>Saiba Mais</button>
                      </a>
                    )}
                  </div>
                </div>
              </Fade>
            )}
          </div>
        </div>
        <div className="w40 flex">
          <img src="robot.png" alt="sei nao" />
        </div>
      </Container>
    </Wrapper>
  )
}
