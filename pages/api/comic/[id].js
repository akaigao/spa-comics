import api from '../../../src/service/api'

export default async function handler(req, res) {
  const { id } = req.query

  try {
    if (!id) {
      res.status(404).json({ message: 'Id is required' })
      return
    }

    const response = await api.get(`/comics/${id}`)
    res.status(200).json(response.data)
  } catch (error) {
    res.status(200).json(error.response.data)
    console.log(error.response)
  }
}
