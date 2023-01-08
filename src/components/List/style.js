import styled from 'styled-components'

export const ListContainer = styled.div`
  max-width: 1440px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 50px;
  gap: 40px;
`

export const Listing = styled.div`
  /* width: 100%; */
  max-width: 1440px;

  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(5, minmax(150px, 1fr));
  grid-gap: 60px 30px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(4, minmax(150px, 1fr));
  }

  @media (max-width: 790px) {
    grid-template-columns: repeat(3, minmax(150px, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(150px, 1fr));
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, minmax(150px, 1fr));
    justify-items: center;
  }
`
