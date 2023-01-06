import { Button } from '@mui/material'
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-width: 100vw;
    min-height: 100vh;

    font-family: ${props => props.theme.typography.fontFamily};
    font-size: ${props => props.theme.typography.fontSize};

    background-color: ${props => props.theme.pallete.background.main};
    color: ${props => props.theme.pallete.secondary.main};

    display: flex;
    align-items: center;
    justify-content: center;
  }

  #__next {
    width: 1440px;
    margin: 0 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 50px;
  }
`

export const Title = styled.h1`
  font-family: ${props => props.theme.typography.fonts.h1};
  font-size: 1.8em;
  line-height: 1.2em;
`

export const Description = styled.p`
  color: ${props => props.theme.pallete.primary.description};
  line-height: 1.5em;
`

export const Span = styled.span`
  color: ${props => props.theme.pallete.primary.description};
  font-size: 0.9em;
`

export const MyButton = styled(Button)`
  border-radius: 50px !important;
  font-size: 0.8em !important;

  background: #ed213a;
  background: -webkit-linear-gradient(to right, #ed213a, #93291e);
  background: linear-gradient(to right, #ed213a, #93291e);

  :hover {
    background-position: right center;
  }
`

export const Divisor = styled.div`
  background: #ed213a;
  background: -webkit-linear-gradient(to right, #ed213a, #93291e);
  background: linear-gradient(to right, #ed213a, #93291e);

  width: 6px;
  height: 6px;

  border-radius: 50%;
`
