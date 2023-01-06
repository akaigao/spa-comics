import { useEffect, useState } from 'react'

export function Box({ orientation = 'horizontal', children }) {
  const [style, setStyle] = useState({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px'
  })

  useEffect(() => {
    if (orientation === 'horizontal') {
      setStyle({ ...style, flexDirection: 'row' })
      return
    }

    if (orientation === 'vertical') {
      setStyle({ ...style, flexDirection: 'column' })
    }
  }, [orientation])

  return <div style={style}>{children}</div>
}
