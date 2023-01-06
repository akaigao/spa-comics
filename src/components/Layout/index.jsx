import Head from 'next/head'
import { Navbar } from '../Navbar'
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

      <Footer>footer</Footer>
    </>
  )
}
