import { Button } from '@mui/material'
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    max-width: 100vw;

    font-family: ${props => props.theme.typography.fontFamily};
    font-size: ${props => props.theme.typography.fontSize};

    background-color: ${props => props.theme.pallete.background.main};
    color: ${props => props.theme.pallete.secondary.main};
  }

  #__next {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Title = styled.h1`
  font-family: ${props => props.theme.typography.fonts.h1};
  font-size: 1.8em;
  line-height: 1.2em;
  word-break: break-all;
`

export const SecondaryTitle = styled.h1`
  font-family: ${props => props.theme.typography.fonts.h1};
  font-size: 0.8em;
  font-weight: 400;
  line-height: 1.2em;
  word-break: break-all;
`

export const Description = styled.p`
  color: ${props => props.theme.pallete.primary.description};
  line-height: 1.5em;
  word-break: break-all;
`

export const Span = styled.span`
  color: ${props => props.theme.pallete.primary.description};
  font-size: 0.9em;
  line-height: 1.5em;

  span {
    color: ${props => props.theme.pallete.secondary.main};
    letter-spacing: 0.05em;
  }
`

export const MyButton = styled(Button)`
  border-radius: 50px !important;
  font-size: 0.8em !important;

  background: ${props => props.theme.pallete.primary.main};
  background: -webkit-linear-gradient(
    ${props => props.theme.pallete.button.main}
  );
  background: linear-gradient(${props => props.theme.pallete.button.main});

  :hover {
    background-position: right center;
  }

  a {
    width: 100%;
    text-decoration: none;
    color: ${props => props.theme.pallete.secondary.main};
  }
`

export const Divisor = styled.div`
  background: ${props => props.theme.pallete.primary.main};
  background: -webkit-linear-gradient(
    ${props => props.theme.pallete.button.main}
  );
  background: linear-gradient(${props => props.theme.pallete.button.main});

  width: 6px;
  height: 6px;

  border-radius: 50%;
`
