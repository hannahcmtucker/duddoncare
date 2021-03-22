import { useEffect } from 'react'
import { navigate } from '@reach/router' // eslint-disable-line

// TODO this works but shows a flash of white page
// better solution?
export default function NotFoundPage(): null {
  useEffect(() => {
    navigate('/')
  }, [])
  return null
}
