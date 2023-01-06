import { red } from '@mui/material/colors'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif']
})

export default {
  pallete: {
    primary: {
      main: '#EC1D24'
    },
    secondary: {
      main: '#fff'
    },
    background: {
      main: '#1A0024'
    },
    error: {
      main: red.A400
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontSize: '16px'
  }
}
