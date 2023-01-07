import { useState } from 'react'
import { MyButton, Title } from '../../styles/global'
import { BasicModal } from '../BasicModal'
import {
  Gradient,
  HighlightButtonContainer,
  HighlightContainer,
  HighlightThumb,
  HighlightThumbContainer
} from './style'

export function Highlight({ comic }) {
  if (!comic) return

  const [open, setOpen] = useState(false)

  const handleOpenModal = () => setOpen(true)
  const handleCloseModal = () => setOpen(false)

  const pathThumb = comic[0].thumbnail.path + '.' + comic[0].thumbnail.extension

  return (
    <>
      <HighlightContainer>
        <HighlightThumbContainer>
          <Gradient />
          <HighlightThumb src={pathThumb} alt={comic[0].title} />

          <HighlightButtonContainer>
            <Title>{comic[0].title}</Title>
            <MyButton fullWidth variant="contained" onClick={handleOpenModal}>
              Continue Reading
            </MyButton>
          </HighlightButtonContainer>
        </HighlightThumbContainer>
      </HighlightContainer>

      <BasicModal open={open} onClose={handleCloseModal} comic={comic} />
    </>
  )
}
