export default async function handler(req, res) {
  const publicKey = '94ad184aacf11581783e5a0081388ffa'
  const timestamp = '1673025466'
  const hash = 'e3d2bb6a1ee3c7f7f58943b1eb725195'

  const fetchApi = await fetch(
    `https://gateway.marvel.com:443/v1/public/comics?format=comic&limit=10&offset=2&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
  )
  const response = await fetchApi.json()

  res.status(200).json(response)
}
