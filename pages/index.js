import { useState } from 'react'
import { BasicModal } from '../src/components/BasicModal'
import { Highlight } from '../src/components/Highlight'
import { List } from '../src/components/List'

export default function Home() {
  const [open, setOpen] = useState(false)
  const handleOpenModal = () => setOpen(true)
  const handleCloseModal = () => setOpen(false)

  return (
    <>
      <Highlight onClick={handleOpenModal} />
      <List />

      <BasicModal open={open} onClose={handleCloseModal} />
    </>
  )
}
