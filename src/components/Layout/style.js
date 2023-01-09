import styled from 'styled-components'
import { NavList } from '../Navbar/style'

export const HeaderDesktop = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 440px) {
    display: none;
  }
`

export const HeaderMobile = styled.div`
  width: 100%;
  display: none;

  @media (max-width: 440px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 30px;
  }
`

export const Header = styled.header`
  width: 100%;
  height: 30px;

  background-color: ${props => props.theme.pallete.secondary.main};
  color: ${props => props.theme.pallete.primary.main};

  padding: 40px 0px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 440px) {
    height: 130px;
  }
`

export const HeaderBox = styled.div`
  width: 1440px;
  height: 100%;

  padding: 0px 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 440px) {
    width: auto;
    flex-direction: column;
    padding: 0;
  }
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
  gap: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 440px) {
    flex-direction: column;
    height: auto;
  }
`

export const NavListFooter = styled(NavList)`
  @media (max-width: 300px) {
    flex-direction: column;
    gap: 5px;
  }
`
