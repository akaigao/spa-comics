import { useEffect, useState } from 'react'

export function Box({ sx, orientation = 'horizontal', children }) {
  const [style, setStyle] = useState({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px'
  })

  useEffect(() => {
    if (orientation === 'horizontal') {
      setStyle({ ...style, ...sx, flexDirection: 'row' })
      return
    }

    if (orientation === 'vertical') {
      setStyle({ ...style, ...sx, flexDirection: 'column' })
    }
  }, [orientation, sx])

  return <div style={style}>{children}</div>
}
