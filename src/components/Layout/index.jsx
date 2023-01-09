import { Box } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import logo from '../../assets/logoMarvel.svg'
import { Span, Title } from '../../styles/global'
import { Navbar } from '../Navbar'
import { NavItem } from '../Navbar/style'
import {
  Footer,
  Header,
  HeaderBox,
  HeaderDesktop,
  HeaderMobile,
  Main,
  NavListFooter
} from './style'

export function Layout({ children }) {
  return (
    <>
      <Head>
        <title>SPA Comics</title>
      </Head>

      <Header>
        <HeaderMobile>
          <HeaderBox>
            <Image priority={true} src={logo} alt="Logo Marvel" />
            <Title>Comics</Title>
          </HeaderBox>
          <Navbar />
        </HeaderMobile>

        <HeaderDesktop>
          <HeaderBox>
            <Image priority={true} src={logo} alt="Logo Marvel" />
            <Title>Comics</Title>
            <Navbar />
          </HeaderBox>
        </HeaderDesktop>
      </Header>

      <Main>{children}</Main>

      <Footer>
        <nav>
          <NavListFooter>
            <NavItem>
              <a
                href="https://www.instagram.com/akaigao/"
                target="_blank"
                rel="nonoopener noreferero"
              >
                Instagram
              </a>
            </NavItem>
            <NavItem>
              <a
                href="https://github.com/akaigao"
                target="_blank"
                rel="nonoopener noreferero"
              >
                Github
              </a>
            </NavItem>
            <NavItem>
              <a
                href="https://www.linkedin.com/in/akaigao/"
                target="_blank"
                rel="nonoopener noreferero"
              >
                LinkedIn
              </a>
            </NavItem>
          </NavListFooter>
        </nav>

        <Box>
          <Span>&copy;{new Date().getFullYear()} akaigão</Span>
        </Box>
      </Footer>
    </>
  )
}
