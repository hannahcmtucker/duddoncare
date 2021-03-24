import { useEffect } from 'react'
import { navigate } from '@reach/router' // eslint-disable-line

// Backup only - rewrite handled by netlify
export default function NotFoundPage(): null {
  useEffect(() => {
    navigate('/')
  }, [])
  return null
}
