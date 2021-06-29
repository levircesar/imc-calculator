import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 10px 2%;

  button {
    background-color: ${props => props.theme.colors.primary};
    border-top: 1px solid ${props => props.theme.colors.background};
    border-right: 1px solid ${props => props.theme.colors.background};
    border-bottom: 1px solid ${props => props.theme.colors.background};
    border-left: 0;
    width: 100%;
    -webkit-box-shadow: 3px 7px 15px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 3px 7px 15px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 3px 7px 15px 0px rgba(0, 0, 0, 0.75);

    div {
      width: 100%;
      border-left: 5px solid ${props => props.theme.colors.background};
      padding-right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: nowrap;
      flex-direction: row;
      text-align: center;
      padding: 10px;
      color: ${props => props.theme.colors.background};
      font-size: 2rem;

      h2 {
        margin: 10px;
        font-weight: lighter;
        color: ${props => props.theme.colors.text};
        font-size: 16px;
      }
    }
  }
  .actived {
    display: block !important;
  }
  .box {
    display: none;
    transition: 0.2s;
    width: 98%;
    margin: 0 auto;
    border-top: 0;
    border-right: 1px solid ${props => props.theme.colors.background};
    border-bottom: 1px solid ${props => props.theme.colors.background};
    border-left: 1px solid ${props => props.theme.colors.background};
    border-radius: 0 0 10px 10px;
    padding: 20px;
    span {
      font-weight: bold;
      font-size: 18px;
    }
    h2,
    p {
      margin: 10px 0;
    }
  }
  .btn {
    margin: 20px auto;
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
`
