import { Highlight } from '../src/components/Highlight'
import { List } from '../src/components/List'
import api from '../src/service/api'

export default function Home({ allComics, totalHqs, comicForId }) {
  return (
    <>
      <Highlight comic={comicForId} />
      <List comics={allComics} total={totalHqs} />
    </>
  )
}

export const getStaticProps = async () => {
  let allComics = null
  let comicForId = null
  const id = Math.floor(Math.random() * 53820)
  let totalHqs = null

  try {
    const all = await api.get(`/comics?&limit=30&offset=1`)
    const forId = await api.get(`/comics/${id}`)

    totalHqs = all.data.data.total
    allComics = all.data.data.results
    comicForId = forId.data.data.results
  } catch (error) {
    console.log(error.response.data, 'page index - l28')
    console.log(error.response.data.code)

    if (error.response.data.code === 404) {
      getStaticProps()
    }
  }

  return {
    props: {
      allComics,
      totalHqs,
      comicForId
    },
    revalidate: 5
  }
}
