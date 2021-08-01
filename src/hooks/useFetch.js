import { useEffect, useState } from 'react'

export default function useFetch(path) {
  const [data, setData] = useState([])
  const [error, setError] = useState(undefined)
  const [loading, setLoading] = useState(true)

  function loadData() {
  return fetch(path)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    loadData()
  }, [])


  return { data, error, loading, loadData }

}