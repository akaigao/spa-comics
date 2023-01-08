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
  let comicForId = []
  const id = Math.floor(Math.random() * 29)
  let totalHqs = null

  try {
    const all = await api.get(`/comics?&limit=30&offset=1`)
    const forId = await api.get(`/comics/${id}`)

    totalHqs = all.data.data.total
    allComics = all.data.data.results
    comicForId.push(all.data.data.results[id])
  } catch (error) {
    console.log(error.response.data, 'page index - l28')
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
