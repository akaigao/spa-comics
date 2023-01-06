import { ThemeProvider } from 'styled-components'
import { Layout } from '../src/components/Layout'
import { GlobalStyle } from '../src/styles/global'
import light from '../src/styles/theme/light'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
