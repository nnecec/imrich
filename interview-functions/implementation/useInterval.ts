import { useEffect, useRef } from 'react'

/**
 * https://overreacted.io/zh-hans/making-setinterval-declarative-with-react-hooks/
 *
 * @param callback
 * @param delay
 */
export const useInterval = (callback: Function, delay?: number | null) => {
  const savedCallback = useRef<Function>(() => { })

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    if (delay !== null) {
      const interval = setInterval(() => savedCallback.current(), delay || 0)
      return () => clearInterval(interval)
    }

    return undefined
  }, [delay])
}
