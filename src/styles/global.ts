import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    
  }

  body {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text} !important;
  }

    
  html{
    font-size: 100%;
  }


  @media (max-width: 1080px){
    html{
      font-size: 90%; //15px
    }
  }

  @media (max-width: 720px){
    html{
      font-size: 80%; //14px
    }
  }

  @media (max-width: 600px){
    html{
      font-size: 80%; //14px
    }
  }
  body , input, textarea, button , a{
    font: 500 1rem inter, sans-serif;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: 600;
    font-family: Lexend, sans-serif;
  }

  h1{
    font-size: 2rem;
  }

  h2{
    font-size: 1.5rem;
  }

  button{
    cursor: pointer;
  }

  button:focus{
    outline: none;
  }

  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.6);
  }
  .my_slider,.slick-slider,.slick-initialized,.slick-slider,.slick-track{
    img{
      position: relative !important;
    z-index: 0 !important;
    }
    position: relative !important;
    z-index: 0 !important;
  }
  .rc-anchor-normal {
      width: 250px !important;
    }
    .g-recaptcha {
    transform:scale(0.77) !important ;
    transform-origin:0 0 !important;
  }
`
