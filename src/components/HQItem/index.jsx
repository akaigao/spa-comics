import { format } from 'date-fns'
import { Divisor, SecondaryTitle, Span } from '../../styles/global'
import { Box } from '../Box'
import {
  HQItemContainer,
  HQItemContainerInfos,
  HQItemThumb,
  HQItemThumbContainer
} from './style'

export function HQItem({ onClick, idComic, thumb, title, date, formatData }) {
  let newDate = date
  const pathThumb = thumb.path + '.' + thumb.extension

  if (date[0] === '-') {
    const slice = date.slice(1)
    newDate = slice
  }

  const formattedDate = format(new Date(newDate), 'MMMM dd, yyyy')

  return (
    <HQItemContainer>
      <HQItemThumbContainer>
        <HQItemThumb
          src={pathThumb}
          alt={title}
          onClick={onClick}
          data-id={idComic}
        />
      </HQItemThumbContainer>

      <HQItemContainerInfos>
        <SecondaryTitle>{title}</SecondaryTitle>
        <Box>
          <Span>{formattedDate}</Span>
          <Divisor />
          <Span>{formatData}</Span>
        </Box>
      </HQItemContainerInfos>
    </HQItemContainer>
  )
}
