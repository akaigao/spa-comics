import { BasicPagination } from '../BasicPagination'
import { HQItem } from '../HQItem'
import { ListContainer, Listing } from './style'

export function List() {
  return (
    <ListContainer>
      <Listing>
        <HQItem />
        <HQItem />
        <HQItem />
        <HQItem />
        <HQItem />
      </Listing>

      <BasicPagination />
    </ListContainer>
  )
}
