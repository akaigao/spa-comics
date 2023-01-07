import styled from 'styled-components'

export const ListContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`

export const Listing = styled.div`
  width: 100%;

  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 60px 30px;
`
