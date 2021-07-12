import styled from 'styled-components'

export const Title = styled.div`
  h2 {
    color: white;
    width: 100%;
    text-align: left;
    font-size: 3rem;
    margin-bottom: 5px;
    span {
      color: ${props => props.theme.colors.backgroundSecondary};
    }
  }
  h4 {
    margin-bottom: 5px;
    color: white;
    width: 100%;
    text-align: left;
    font-size: 2rem;
  }
  p {
    max-width: 400px;
    font-size: 1.5rem;
    text-align: left;
  }
`

export const Menu = styled.div`
  .desktop {
    display: block;
    width: 100%;
    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h2 {
        color: white;
        width: 100%;
        margin: 0 20px;
        span {
          color: ${props => props.theme.colors.backgroundSecondary};
        }
      }
      button {
        border: 0;
        background: 0;
        cursor: pointer;
      }
      img {
        width: 100%;
        max-width: 200px;
      }
      .links {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        cursor: pointer;
        button {
          color: white;
          text-decoration: none;
          margin: 0 20px;
          font-size: 22px;
          transition: 0.2s;
          background: none;
          border: 0;
          &:hover {
            color: ${props => props.theme.colors.backgroundSecondary};
          }
          div {
            width: 100%;
            border: 2px solid white;
            padding: 10px;
          }
        }
      }
    }
  }
  .mobile {
    display: none;
    width: 100%;

    .content {
      width: 100%;
      margin: 0 2%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h2 {
        color: white;
        span {
          color: ${props => props.theme.colors.background};
        }
      }
      button {
        font-size: 25px;
        color: white;
        border: 0;
        background: 0;
        cursor: pointer;
      }
      img {
        width: 100%;
        max-width: 200px;
      }
      .actived {
        left: 0 !important;
      }
      .links {
        position: fixed;
        top: 0;
        left: 100%;
        width: 100%;
        height: 100%;
        background-color: ${props => props.theme.colors.background};
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        transition: 0.2s;

        button {
          color: white;
          text-decoration: none;
          margin: 20px 20px;
          font-size: 22px;
          transition: 0.2s;
          background: none;
          cursor: pointer;
          border: 0;
          &:hover {
            color: ${props => props.theme.colors.backgroundSecondary};
          }
          div {
            width: 100%;
            border: 2px solid white;
            padding: 10px;
          }
        }
      }
    }
  }
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 80px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.5s;

  @media screen and (max-width: 800px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    .w40 {
      margin-top: 20px;
    }
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .column {
    flex-direction: column;
  }
  .w60 {
    width: 60%;
  }
  .w40 {
    width: 40%;
    img {
      width: 100%;
      max-width: 300px;
    }
  }
  .w50 {
    width: 50%;
  }
  .quiz {
    text-align: center;
    h1 {
      font-size: 2rem;
    }
    h3 {
      margin: 20px;
    }
    .input {
      margin: 10px 0;
      width: 100%;
      max-width: 600px;
      height: 40px;
      border: 0;
      padding-left: 10px;
      &:focus {
        border: 0;
        outline: none;
      }
    }
    button {
      margin-top: 20px;
      margin-right: 20px;
      max-width: 240px;
      padding: 0 20px;
      height: 60px;
      border: 0;
      border-radius: 5px;
      background-color: ${props => props.theme.colors.background};
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
      font-family: 'Roboto';
      transition: 0.3s;
      &:hover {
        background-color: ${props => props.theme.colors.buttonHover};
      }
    }
    .buttons {
      display: flex;
      width: 100%;
      align-items: flex-start;
    }
  }
`
export const Wrapper = styled.div`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text} !important;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;

  .header {
    background-color: ${props => props.theme.colors.background};
    width: 100%;
    height: 40px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    .content {
      width: 100%;
      margin: 0 2%;
      max-width: 1100px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .telefone {
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          padding-left: 10px;
        }
      }

      .icones {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        a {
          color: white;
          text-decoration: none;
          margin: 0 20px;
          font-size: 20px;
        }
        @media screen and (max-width: 500px) {
          a {
            margin: 0 5px;
          }
        }
      }
    }
  }

  .banner {
    width: 100%;
    height: 600px;
    background-image: url('/banner.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 2;
    .box {
      width: 100%;
      margin: 0px auto;
      max-width: 400px;
      padding: 20px;
      height: 180px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border: 5px solid white;
      transition: 0.5s;
      p {
        font-size: 2rem;
        margin: 5px;
      }
    }
    .btn {
      margin: 80px auto;
      width: 200px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      border-radius: 10px;
      color: white;
      text-decoration: none;
      background-color: ${props => props.theme.colors.background};
      font-size: 18px;
      transition: 0.5s;
      span {
        padding-left: 10px;
      }
      &:hover {
        background-color: ${props => props.theme.colors.backgroundSecondary};
      }
    }
  }

  .scrolled {
    background-color: rgba(0, 0, 0, 0.2);
    &:hover {
      background-color: rgba(0, 0, 0, 0.6);
    }
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    @media screen and (max-width: 800px) {
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
  .recaptcha {
    width: 100%;
    overflow-y: hidden;
    iframe {
      width: 100% !important;
    }
  }
  .mensagem {
    width: 100%;
    padding: 30px;
    color: white;
    background-color: ${props => props.theme.colors.background};
    text-align: center;
    p {
      font-size: 25px;
      font-weight: bold;
      font-style: italic;
    }
  }

  .servicos {
    width: 100%;
    /*background-image: url('banner2.svg');
    min-height: 200px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;*/
    padding: 40px 0;
    h2 {
      color: ${props => props.theme.colors.linePrimary};
      font-size: 3rem;
      margin: 20px auto;
      text-align: center;
    }

    .boxes {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 5%;
      margin: 20px 2%;
    }
    .box-single {
      width: 25%;
      max-width: 400px;
      border: 0;
      background: none;
      -webkit-box-shadow: 4px 6px 5px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 4px 6px 5px 0px rgba(0, 0, 0, 0.75);
      box-shadow: 4px 6px 5px 0px rgba(0, 0, 0, 0.75);
      .box-background {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        max-width: 100%;
        height: 200px;
      }
      .box-text {
        border-left: 2px solid ${props => props.theme.colors.linePrimary};
        border-bottom: 2px solid ${props => props.theme.colors.linePrimary};
        border-right: 2px solid ${props => props.theme.colors.linePrimary};
        font-size: 18px;
        font-weight: bold;
        color: white;
        background-color: rgba(0, 0, 0, 0.9);
        span {
          border-left: 2px solid ${props => props.theme.colors.linePrimary};
          margin-right: 10px;
        }
        p {
          padding-top: 20px;
          padding-bottom: 10px;
          padding-left: 10px;
          padding-right: 10px;
          min-height: 100px;
        }
      }
      @media screen and (max-width: 796px) {
        display: block;
        width: 90%;
        max-width: 600px;
        margin: 10px 2%;
        .box-text {
          padding-top: 20px;
        }
        .box-background {
          width: 100%;
          height: 300px;
        }
      }
    }
  }

  .diferenciais {
    padding: 20px 0;
    width: 100%;
    height: 235px;
    display: flex;
    justify-content: center;
    align-items: center;
    .box1 {
      width: 50%;
      background-color: rgba(0, 0, 0, 0.6);
      height: 250px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 15px;
      color: white;
      font-size: 2rem;
      background-image: url('diferenciais.svg');
      background-position: top;
      background-size: cover;
      background-repeat: no-repeat;
      max-width: 100%;
      h2 {
        font-size: 4rem;
        padding-left: 10px;
      }
      p {
        padding-left: 10px;
      }
    }
    .box2 {
      width: 50%;
      background-color: ${props => props.theme.colors.backgroundSecondary};
      height: 250px;
      padding: 15px;
      p {
        color: white;
        font-weight: bold;
        font-size: 1.5rem;
      }
    }
    @media screen and (max-width: 796px) {
      flex-direction: column;
      width: 100%;
      text-align: center;
      justify-content: center;
      align-items: center;
      .box1,
      .box2 {
        width: 100%;
        text-align: center;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .slideshow {
    width: 100%;
    min-height: 400px;
    position: relative;
    z-index: 1;
    h2 {
      color: ${props => props.theme.colors.linePrimary};
      font-size: 3rem;
      padding: 30px;
      text-align: center;
    }
  }
  .slide {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    position: relative;
    z-index: 1;
    h3,
    h4,
    p {
      margin: 5px;
    }
    h3 {
      margin-bottom: 20px;
    }
    img {
      width: 100px;
      height: 100px;
      border-radius: 50px;
      position: relative !important;
      z-index: 1 !important;
    }
    a {
      position: relative !important;
      z-index: 1 !important;
    }
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .contato-section {
    flex-direction: row;
    max-width: 1100px;
    width: 100%;
    .maps {
      width: 50%;
      padding: 2%;
      iframe {
        width: 100%;
        height: 550px;
      }
    }
    .contato {
      width: 50%;
    }

    @media screen and (max-width: 796px) {
      flex-direction: column;
      .maps {
        width: 70%;
        padding: 10px 2%;
        iframe {
          width: 100%;
          height: 250px;
        }
      }
      .contato {
        width: 100%;
        padding: 0 2%;
        padding-top: 20px;
      }
    }
  }
  .parallax {
    width: 100%;
    background-image: url('banner.svg');
    min-height: 200px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    div {
      width: 100%;
      max-width: 180px;
      height: 80px;
      text-align: center;
      border: 2px solid white;
      padding: 10px;
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 30px;
    background-color: ${props => props.theme.colors.background};
    color: white;
    text-align: center;
    .icones {
      padding: 5px;
      a {
        font-weight: bold;
        font-size: 1.5rem;
        color: white;
        text-decoration: none;
        margin: 10px;
      }
    }
    .footer-block {
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      flex-wrap: wrap;
    }
    @media screen and (max-width: 572px) {
      .footer-block {
        width: 100%;
        flex-wrap: wrap;
        flex-direction: column;
        padding: 8px 0;
      }
      width: 100%;
      flex-wrap: wrap;
      flex-direction: column;
    }
  }
  .footer2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px;
    background-color: ${props => props.theme.colors.linePrimary};
    color: white;
    flex-direction: column;
    flex-wrap: wrap;
    a {
      text-decoration: none;
      color: white;
      font-weight: bold;
    }
  }
  .showButtons {
    width: 100%;
    margin: 30px 2%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .btn {
    margin: 80px auto;
    width: 100%;
    max-width: 200px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 10px;
    color: white;
    text-decoration: none;
    background-color: ${props => props.theme.colors.background};
    font-size: 18px;
    transition: 0.5s;
    -webkit-box-shadow: 3px 7px 15px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 3px 7px 15px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 3px 7px 15px 0px rgba(0, 0, 0, 0.75);
    span {
      padding-left: 10px;
    }
    &:hover {
      background-color: ${props => props.theme.colors.backgroundSecondary};
    }
  }

  .contato {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 800px;
    padding: 40px 10px 0px 10px;
    margin: 0 2%;
    margin-bottom: 40px;
    flex-direction: column;
    h4 {
      color: ${props => props.theme.colors.lineSecondary};
    }
    input[type='text'] {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      padding-left: 10px;
      margin: 10px 0;
      border: 0;
    }
    textarea {
      width: 100%;
      min-height: 150px;
      border-radius: 5px;
      padding: 10px;
      margin: 10px 0;
      border: 0;
      resize: vertical;
    }
    input[type='submit'] {
      cursor: pointer;
      margin: 10px auto;
      width: 100%;
      max-width: 200px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      border-radius: 10px;
      color: white;
      text-decoration: none;
      background-color: ${props => props.theme.colors.background};
      font-size: 18px;
      transition: 0.5s;
      -webkit-box-shadow: 3px 7px 15px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 3px 7px 15px 0px rgba(0, 0, 0, 0.75);
      box-shadow: 3px 7px 15px 0px rgba(0, 0, 0, 0.75);
      span {
        padding-left: 10px;
      }
      &:hover {
        background-color: ${props => props.theme.colors.backgroundSecondary};
      }
    }
  }
`
export const ButtonUp = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 999;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: ${props => props.theme.colors.background};
  color: white;
  border: 0;
  transition: 0.5s;
  -webkit-box-shadow: 3px 7px 15px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 7px 15px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 7px 15px 0px rgba(0, 0, 0, 0.75);
  &:hover {
    background: ${props => props.theme.colors.backgroundSecondary};
  }
`

export const ButtonWhats = styled.a`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 999;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #1c942e;
  color: white;
  border: 0;
  transition: 0.5s;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 3px 7px 15px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 7px 15px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 7px 15px 0px rgba(0, 0, 0, 0.75);
  &:hover {
    background: #48b858;
  }
`
