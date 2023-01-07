import { Divisor, SecondaryTitle, Span } from '../../styles/global'
import { Box } from '../Box'
import {
  HQItemContainer,
  HQItemContainerInfos,
  HQItemThumb,
  HQItemThumbContainer
} from './style'

export function HQItem({ onClick }) {
  return (
    <HQItemContainer onClick={onClick}>
      <HQItemThumbContainer>
        <HQItemThumb
          src="https://www.looper.com/img/gallery/marvel-heroes-were-still-waiting-to-see-on-screen/intro-1553116214.jpg"
          alt="heros"
        />
      </HQItemThumbContainer>

      <HQItemContainerInfos>
        <SecondaryTitle>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </SecondaryTitle>
        <Box>
          <Span>December 26, 2021</Span>
          <Divisor />
          <Span>Comic</Span>
        </Box>
      </HQItemContainerInfos>
    </HQItemContainer>
  )
}
