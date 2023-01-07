import {
  Description,
  Divisor,
  MyButton,
  Span,
  Title
} from '../../styles/global'
import { Box } from '../Box'
import {
  HighlightContainer,
  HighlightContainerInfos,
  HighlightThumb,
  HighlightThumbContainer
} from './style'

export function Highlight({ onClick }) {
  return (
    <HighlightContainer>
      <HighlightThumbContainer>
        <HighlightThumb
          src="https://www.looper.com/img/gallery/marvel-heroes-were-still-waiting-to-see-on-screen/intro-1553116214.jpg"
          alt="heros"
        />
      </HighlightThumbContainer>

      <HighlightContainerInfos>
        <Box>
          <Span>December 26, 2021</Span>
          <Divisor />
          <Span>Comic</Span>
        </Box>
        <Title>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          atque perspiciatis accusantium excepturi harum officia facilis odit
          minus porro sequi tempore earum optio vitae magnam, voluptates quia
          ullam molestias dolorum?
        </Description>

        <MyButton variant="contained" onClick={onClick}>
          Continuar lendo
        </MyButton>
      </HighlightContainerInfos>
    </HighlightContainer>
  )
}
