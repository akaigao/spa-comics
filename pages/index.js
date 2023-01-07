import { Highlight } from '../src/components/Highlight'
import { List } from '../src/components/List'
import api from '../src/service/api'

export default function Home({ allComics, comicForId }) {
  return (
    <>
      <Highlight comic={comicForId} />
      <List />
    </>
  )
}

export const getStaticProps = async () => {
  let allComics = null
  let comicForId = null
  const id = Math.floor(Math.random() * 53820)

  try {
    const all = await api.get(`/comics`)
    const forId = await api.get(`/comics/${id}`)

    allComics = all.data.data.results
    comicForId = forId.data.data.results
  } catch (error) {
    console.log(error.response)
  }

  return {
    props: {
      allComics,
      comicForId
    },
    revalidate: 5
  }
}
