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
  width: 50%;
  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    overflow: hidden;
    width: 100%;
  }
`

export const HighlightThumb = styled.img`
  overflow: hidden;

  height: 100%;
  border-radius: 50px;
`

export const HighlightContainerInfos = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  gap: 20px;
`
