import { Pagination } from '@mui/material'

export function BasicPagination({ page, count, onChange }) {
  return (
    <Pagination
      sx={{
        '& button': {
          color: '#fff'
        },
        '& .css-1mb5p0g-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected':
          {
            backgroundColor: '#ed213a'
          },
        '& .css-1mb5p0g-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected:hover':
          {
            backgroundColor: '#93291e'
          },
        '& div': {
          color: '#fff'
        }
      }}
      color="primary"
      shape="rounded"
      size="small"
      count={count}
      page={page}
      onChange={onChange}
    />
  )
}
