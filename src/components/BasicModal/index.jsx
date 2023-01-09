import { Modal } from '@mui/material'
import { format } from 'date-fns'
import {
  Description,
  Divisor,
  MyButton,
  SecondaryTitle,
  Span,
  Title
} from '../../styles/global'
import { Box } from '../Box'
import {
  BasicModalButtonContainer,
  BasicModalContainer,
  BasicModalContainerInfos,
  BasicModalThumb,
  BasicModalThumbContainer,
  Gradient
} from './style'

export function BasicModal({ open, onClose, comic }) {
  if (!comic) return

  let newDate = comic[0].dates[0].date

  const pathThumb = comic[0].thumbnail.path + '.' + comic[0].thumbnail.extension
  const description = !comic[0].description
    ? 'No description for this comic :('
    : comic[0].description.split('<br>')[0]

  if (comic[0].dates[0].date[0] === '-') {
    const slice = comic[0].dates[0].date.slice(1)
    newDate = slice
  }

  const date = format(new Date(newDate), 'yyyy')

  return (
    <Modal open={open} onClose={onClose} sx={{ overflow: 'auto' }}>
      <BasicModalContainer>
        <BasicModalThumbContainer>
          <Gradient />
          <BasicModalThumb src={pathThumb} alt="test" />

          <BasicModalButtonContainer>
            <MyButton fullWidth>
              <a
                href="https://www.comicshoplocator.com/StoreLocatorPremier"
                target="_blank"
                rel="nonoopener noreferero"
              >
                Find a Store
              </a>
            </MyButton>
          </BasicModalButtonContainer>
        </BasicModalThumbContainer>

        <BasicModalContainerInfos>
          <Box orientation="horizontal">
            <Span>LATEST: {date}</Span>
            <Divisor />
            <Span>VARIANT: {comic[0].variantDescription}</Span>
          </Box>

          <Title>{comic[0].title}</Title>
          <Description>{description}</Description>

          <hr />

          <Box
            sx={{ alignItems: 'flex-start', gap: '25px' }}
            orientation="vertical"
          >
            <SecondaryTitle>
              Info on <strong>Lorem ipsum</strong>
            </SecondaryTitle>

            <Box sx={{ alignItems: 'flex-start' }} orientation="vertical">
              <Span>
                Creators:{' '}
                <span>
                  {comic[0].creators.items.map(item => `${item.name}, `)}
                </span>
              </Span>

              <Span>
                Characters:{' '}
                <span>
                  {comic[0].characters.items.map(item => `${item.name}, `)}
                </span>
              </Span>

              <Span>
                Format: <span>{comic[0].format}</span>
              </Span>

              <Span>
                Price: $<span>{comic[0].prices[0].price}</span>
              </Span>

              <Span>
                UPC: <span>{comic[0].upc}</span>
              </Span>
            </Box>
          </Box>
        </BasicModalContainerInfos>
      </BasicModalContainer>
    </Modal>
  )
}
