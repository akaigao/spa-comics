import { Pagination } from '@mui/material'

export function BasicPagination({ page, count, onChange }) {
  return (
    <Pagination
      sx={{
        '& button': {
          color: '#fff'
        },
        '& div': {
          color: '#fff'
        }
      }}
      color="error"
      shape="rounded"
      size="small"
      count={count}
      page={page}
      onChange={onChange}
    />
  )
}
