import { useEffect, useState } from 'react'

function fetchWhatEver (params?: any) { }

function useEffectRaceConditions ({ currentPage }) {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    let didCancel = false

    async function fetchData (params) {
      const result: any = await fetchWhatEver(params)
      if (!didCancel) {
        setData(result)
      }
    }

    fetchData({ currentPage })

    return () => {
      didCancel = true
    }
  }, [currentPage])

  return data
}
