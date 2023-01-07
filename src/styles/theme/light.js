import { red } from '@mui/material/colors'
import { Roboto, Unbounded } from '@next/font/google'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif']
})

const unbounded = Unbounded({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif']
})

export default {
  pallete: {
    primary: {
      main: '#EC1D24',
      description: '#715C7A'
    },
    secondary: {
      main: '#fff'
    },
    background: {
      main: '#1A0024',
      second: 'linear-gradient(0deg, #1A0024, transparent 50%);',
      third: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), transparent 50%);'
    },
    error: {
      main: red.A400
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    fonts: {
      h1: unbounded.style.fontFamily
    },
    fontSize: '16px'
  }
}
