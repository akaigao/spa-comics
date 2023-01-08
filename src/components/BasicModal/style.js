import styled from 'styled-components'

export const customModalMui = {}

export const BasicModalContainer = styled.div`
  margin: 100px 0;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 80%;
  background-color: ${props => props.theme.pallete.background.main};

  :focus-visible {
    outline: none;
  }
`

export const Gradient = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;

  background: ${props => props.theme.pallete.background.second};
`

export const BasicModalThumbContainer = styled.div`
  width: 100%;
  max-height: 500px;

  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const BasicModalThumb = styled.img`
  object-fit: cover;

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
