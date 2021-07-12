import React, { useState, useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'
import GlobalStyle from '../styles/global'
import { Menu } from '../styles/index'
import Link from 'next/link'
import { FaBars, FaTimes, FaMoon, FaSun, FaLaptopCode } from 'react-icons/fa'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(dark)
  const [actived, setActived] = useState(false)
  /*const navbarClasses = ['menuDesktop']
  <div className={navbarClasses.join(' ')}></div>
  */
  const menuButton = ['links']
  if (actived) {
    menuButton.push('actived')
  }

  useEffect(() => {
    const tema = JSON.parse(localStorage.getItem('theme'))
    if (tema) {
      const cor = tema.title
      if (cor === 'dark') {
        setTheme(dark)
      } else {
        setTheme(light)
      }
    }
  }, [])
  const toggleTheme = () => {
    const tema = JSON.parse(localStorage.getItem('theme'))
    if (tema) {
      const cor = tema.title
      if (cor === 'dark') {
        localStorage.setItem('theme', JSON.stringify(light))
        setTheme(light)
      } else {
        localStorage.setItem('theme', JSON.stringify(dark))
        setTheme(dark)
      }
    } else {
      setTheme(theme.title === 'dark' ? light : dark)
      localStorage.setItem('theme', JSON.stringify(theme))
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Menu>
        <nav className="desktop">
          <div className="content">
            <Link href="/">
              <button>
                <h2 style={{ fontSize: '3rem' }}>
                  <FaLaptopCode />
                </h2>
              </button>
            </Link>
            <div className="links">
              <Link href="/">
                <button>Inicio</button>
              </Link>
              <Link href="/sobre">
                <button>Sobre</button>
              </Link>
              <button onClick={toggleTheme}>
                {theme.title === 'dark' ? <FaSun /> : <FaMoon />}
              </button>
            </div>
          </div>
        </nav>
        <nav className="mobile">
          <div className="content">
            <Link href="/">
              <button>
                <h2 style={{ fontSize: '3rem' }}>
                  <FaLaptopCode />
                </h2>
              </button>
            </Link>
            <button onClick={() => setActived(!actived)}>
              <FaBars />
            </button>

            <div className={menuButton.join(' ')}>
              <button onClick={() => setActived(!actived)}>
                <FaTimes />
              </button>
              <Link href="/">
                <button>Inicio</button>
              </Link>
              <Link href="/sobre">
                <button>Sobre</button>
              </Link>
              <button onClick={toggleTheme}>
                {theme.title === 'dark' ? <FaSun /> : <FaMoon />}
              </button>
            </div>
          </div>
        </nav>
      </Menu>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
