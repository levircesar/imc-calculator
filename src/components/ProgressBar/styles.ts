import styled from 'styled-components'
interface Props {
  color: string
  widthNumber: string
}

export const FillerStyles = styled.div`
  height: 100%;
  width: ${(props: Props) => props.widthNumber} !important;
  background-color: ${(props: Props) => props.color};
  border-radius: inherit;
  text-align: right;
`

export const Content = styled.div`
  .containerStyles {
    height: 20px;
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 50px;
  }

  .labelStyles {
    padding: 5px;
    color: white;
    font-weight: bold;
  }
`
