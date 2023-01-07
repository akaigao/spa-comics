import { useState } from 'react'
import { BasicModal } from '../BasicModal'
import { BasicPagination } from '../BasicPagination'
import { HQItem } from '../HQItem'
import { ListContainer, Listing } from './style'

export function List({ comics }) {
  if (!comics) return

  const [open, setOpen] = useState(false)
  const [comic, setComic] = useState(null)

  const handleOpenModal = e => {
    const id = Number(e.target.dataset.id)
    const comicFinded = []

    comicFinded.push(
      comics.find(comic => {
        return comic.id === id
      })
    )

    setComic(comicFinded)
    setOpen(true)
  }
  const handleCloseModal = () => setOpen(false)

  return (
    <ListContainer>
      <Listing>
        {comics.map(comic => {
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

      <BasicPagination />

      <BasicModal open={open} onClose={handleCloseModal} comic={comic} />
    </ListContainer>
  )
}
