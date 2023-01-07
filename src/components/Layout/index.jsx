import { Box } from '@mui/material'
import Head from 'next/head'
import { Span } from '../../styles/global'
import { Navbar } from '../Navbar'
import { NavItem, NavList } from '../Navbar/style'
import { Footer, Header, Main } from './style'

export function Layout({ children }) {
  return (
    <>
      <Head>
        <title>SPA Comics</title>
      </Head>

      <Header>
        <h1>Logo</h1>
        <Navbar />
      </Header>

      <Main>{children}</Main>

      <Footer>
        <nav>
          <NavList>
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
          </NavList>
        </nav>
        <Box>
          <Span>&copy;{new Date().getFullYear()} akaigão</Span>
        </Box>
      </Footer>
    </>
  )
}
