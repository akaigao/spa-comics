import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { Roboto } from '@next/font'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  fallback: ['Helvetica', 'Arial', 'sans-serif']
})

export const theme = createTheme({
  pallete: {
    primary: {
      main: '#EC1D24'
    },
    secondary: {
      main: '#fff'
    },
    error: {
      main: red.A400
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily
  }
})
