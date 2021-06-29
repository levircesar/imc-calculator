import React, { ButtonHTMLAttributes, useState } from 'react'
import { Content } from './ShowButton'
import { FaAngleDown, FaAngleUp, FaWhatsapp } from 'react-icons/fa'

interface ArrayProps {
  array?: string
  frase?: string
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  description?: string
  counters?: ArrayProps[]
}

export default function ShowButton({ title, children, ...rest }: ButtonProps) {
  const [actived, setActived] = useState(false)
  function handleAction() {
    setActived(!actived)
  }
  const menuButton = ['box']
  if (actived) {
    menuButton.push('actived')
  }
  return (
    <Content>
      <button {...rest} onClick={handleAction}>
        <div>
          <h2>{title}</h2>
          {actived ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </button>

      <div className={menuButton.join(' ')}>
        {children}
        <a
          className="btn"
          href="https://api.whatsapp.com/send?phone=5585998413146&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20ModernizaWeb">
          <FaWhatsapp /> <span>Entrar em contato</span>
        </a>
      </div>
    </Content>
  )
}
