import { Modal } from '@mui/material'
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

export function BasicModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <BasicModalContainer>
        <BasicModalThumbContainer>
          <Gradient />
          <BasicModalThumb
            src="https://www.looper.com/img/gallery/marvel-heroes-were-still-waiting-to-see-on-screen/intro-1553116214.jpg"
            alt="heros"
          />

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
            <Span>LATEST: 2012</Span>
            <Divisor />
            <Span>VARIANT: TEAMS</Span>
          </Box>

          <Title>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            atque perspiciatis accusantium excepturi harum officia facilis odit
            minus porro sequi tempore earum optio vitae magnam, voluptates quia
            ullam molestias dolorum?
          </Description>

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
                  Ronald Byrd, Jeff Christiansen, Anthony Flamini, Richard
                  Green, Michael Hoskin, Sean Mcquaid, Eric J. Moreels, Mark
                  OEnglish, Stuart Vandal, Tom Grummett
                </span>
              </Span>

              <Span>
                Characters:{' '}
                <span>
                  Apocalypse, Blink, Colossus, Gambit, Holocaust (Age of
                  Apocalypse), Magneto, Mister Sinister, Rogue, Sabretooth (Age
                  of Apocalypse), Shadowcat (Age of Apocalypse), Silver Samurai
                  (Age of Apocalypse), Storm (Age of Apocalypse), Sunfire,
                  Wolverine
                </span>
              </Span>

              <Span>
                Format: <span>Comic</span>
              </Span>

              <Span>
                Price: $<span>3.99</span>
              </Span>

              <Span>
                UPC: <span>5960605695-00111</span>
              </Span>
            </Box>
          </Box>
        </BasicModalContainerInfos>
      </BasicModalContainer>
    </Modal>
  )
}
