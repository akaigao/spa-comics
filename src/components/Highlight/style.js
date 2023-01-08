import styled from 'styled-components'

export const HighlightContainer = styled.div`
  width: 100%;
  gap: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
    grid-gap: 30px;
  }
`

export const HighlightThumbContainer = styled.div`
  width: 100%;
  max-height: 500px;

  position: relative;
  overflow: hidden;

  display: flex;
  align-items: flex-end;
  justify-content: center;
`

export const Gradient = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;

  background: ${props => props.theme.pallete.background.third};
`

export const HighlightThumb = styled.img`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: start;
`

export const HighlightButtonContainer = styled.section`
  width: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;

  position: absolute;
  bottom: 40%;
  left: 30px;
`
