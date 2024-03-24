import { DependencyList, EffectCallback, useEffect, useLayoutEffect } from 'react'

export default function useIsomophicEffect(effect: EffectCallback, deps?: DependencyList) {
  const useIsomophicEffectInternal = typeof window === 'undefined' ? useEffect : useLayoutEffect

  return useIsomophicEffectInternal(effect, deps)
}
