import { Pagination } from '@mui/material'
import { useState } from 'react'

export function BasicPagination() {
  const [page, setPage] = useState(1)

  const handleChange = (e, value) => {
    setPage(value)
  }

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
      count={10}
      page={page}
      onChange={handleChange}
    />
  )
}
