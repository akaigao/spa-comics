import styled from 'styled-components'

export const HighlightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 30px;
`

export const HighlightThumbContainer = styled.div`
  height: 100%;
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const HighlightThumb = styled.img`
  overflow: hidden;

  height: 100%;
  border-radius: 50px;
`

export const HighlightContainerInfos = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  gap: 20px;
`
