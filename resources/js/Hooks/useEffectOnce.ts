/* eslint-disable react-hooks/exhaustive-deps */
import { EffectCallback, useEffect } from 'react'

export default function useEffectOnce(effect: EffectCallback) {
  useEffect(effect, [])
}
