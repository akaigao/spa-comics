import styled from 'styled-components'

export const HQItemContainer = styled.div`
  max-width: 150px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  gap: 15px;

  @media (max-width: 400px) {
    align-items: center;
    text-align: center;
  }
`

export const HQItemThumbContainer = styled.div`
  height: 300px;

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const HQItemThumb = styled.img`
  overflow: hidden;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const HQItemContainerInfos = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  gap: 10px;

  @media (max-width: 400px) {
    width: 80%;
    align-items: center;
  }
`
