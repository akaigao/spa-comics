import api from '../../src/service/api'

export default async function handler(req, res) {
  try {
    const response = await api.get(`/comics`)
    res.status(200).json(response.data)
  } catch (error) {
    res.status(404).json(error.response.data)
    console.log(error.response)
  }
}
