import {useEffect} from 'react'

export function useOnce(cbk) {
  return useEffect(cbk, [])
}
