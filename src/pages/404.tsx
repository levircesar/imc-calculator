import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Custom404() {
  const router = useRouter()
  /*window.location.href = 'http://localhost:3000' */
  useEffect(() => {
    router.replace('/')
  })

  return null
}
