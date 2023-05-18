import { useState, useCallback } from 'react'

const Http = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const request = useCallback(async (url, post) => {
    setLoading(true)
    setError(false)

    try {
      const res = await fetch(url, post)

      if (!res.ok) {
        throw new Error(`url: ${url}, status: ${res.status}`)
      }

      const data = await res.json()
      if (data.length === 0) throw new Error()

      setLoading(false)
      return data
    } catch {
      setError(true)
      setLoading(false)
    }
  }, [])

  return { loading, error, request }
}

export default Http
