import React, { useEffect, useState } from 'react'
import { Content, FillerStyles } from './styles'

const ProgressBar = props => {
  const { bgcolor, completed, title } = props
  const [completedd, setCompletedd] = useState(0)

  useEffect(() => {
    setCompletedd(completed)
  }, [completed])

  return (
    <Content>
      <h2>{title}</h2>
      <div className="containerStyles">
        <FillerStyles color={bgcolor} widthNumber={`${completedd}` + '%'}>
          <span className="labelStyles">{`${completedd}%`}</span>
        </FillerStyles>
      </div>
    </Content>
  )
}

export default ProgressBar
