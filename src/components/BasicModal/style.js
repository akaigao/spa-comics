import styled from 'styled-components'

export const BasicModalContainer = styled.div`
  margin: 10px 0;

  overflow: auto;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 70%;
  height: 90%;
  background-color: ${props => props.theme.pallete.background.main};
`

export const Gradient = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;

  background: ${props => props.theme.pallete.background.second};
`

export const BasicModalThumbContainer = styled.div`
  width: 100%;
  height: 50%;

  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const BasicModalThumb = styled.img`
  @media (min-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 1000px) {
    height: 100%;
  }
`

export const BasicModalButtonContainer = styled.div`
  width: 30%;

  position: absolute;
  bottom: 30px;
  left: 30px;
`

export const BasicModalContainerInfos = styled.section`
  padding: 30px;
  gap: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;

  hr {
    width: 100%;
    opacity: 20%;
  }
`
