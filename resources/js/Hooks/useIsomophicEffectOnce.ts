import { EffectCallback } from 'react'
import useIsomophicEffect from './useIsomophicEffect'

export default function useIsomophicEffectOnce(effect: EffectCallback) {
  useIsomophicEffect(effect, [])
}
