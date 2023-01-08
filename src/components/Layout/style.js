import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 30px;

  background-color: ${props => props.theme.pallete.secondary.main};
  color: ${props => props.theme.pallete.primary.main};

  padding: 40px 0px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderBox = styled.div`
  width: 1440px;
  height: 100%;

  padding: 0px 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Main = styled.main`
  width: 100%;
  height: 100%;

  margin-bottom: 40px;
  gap: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Footer = styled.footer`
  width: 100%;
  height: 30px;

  padding: 40px 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
