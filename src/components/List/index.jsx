import { useEffect, useState } from 'react'
import api from '../../service/api'
import { BasicModal } from '../BasicModal'
import { BasicPagination } from '../BasicPagination'
import { HQItem } from '../HQItem'
import { ListContainer, Listing } from './style'

export function List({ comics, total }) {
  if (!comics) return

  const [open, setOpen] = useState(false)
  const [comicClicked, setComicClicked] = useState(null)
  const [page, setPage] = useState(1)
  const [countPage, setCountPage] = useState(10)
  const [currentsComics, setCurrentsComics] = useState(comics)

  const handleOpenModal = e => {
    const id = Number(e.target.dataset.id)
    const comicFinded = []

    comicFinded.push(
      currentsComics.find(comic => {
        return comic.id === id
      })
    )

    setComicClicked(comicFinded)
    setOpen(true)
  }
  const handleCloseModal = () => setOpen(false)

  const handleChangePagination = async (e, value) => {
    setPage(value)

    let allComics = null

    try {
      const all = await api.get(
        `/comics?format=comic&limit=100&offset=${value}`
      )

      allComics = all.data.data.results
      setCurrentsComics(allComics)
      console.log(allComics, 'index list')
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    const totalPages = Math.round(total / 30)
    setCountPage(totalPages)
  }, [])

  return (
    <ListContainer>
      <Listing>
        {currentsComics.map(comic => {
          return (
            <HQItem
              key={comic.id}
              idComic={comic.id}
              thumb={comic.thumbnail}
              title={comic.title}
              date={comic.dates[0].date}
              formatData={comic.format}
              onClick={handleOpenModal}
            />
          )
        })}
      </Listing>

      <BasicPagination
        page={page}
        count={countPage}
        onChange={handleChangePagination}
      />

      <BasicModal open={open} onClose={handleCloseModal} comic={comicClicked} />
    </ListContainer>
  )
}
