import axios from 'axios'

export default axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
  params: {
    apikey: '94ad184aacf11581783e5a0081388ffa',
    ts: '1673025466',
    hash: 'e3d2bb6a1ee3c7f7f58943b1eb725195'
  },
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})
