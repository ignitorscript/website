import { LegacyRef, useCallback } from 'react'

export default function useComposedRefs<Ref>(...refs: LegacyRef<Ref>[]) {
  return useCallback(
    ($ref: Ref) => {
      let i = 0
      while (i < refs.length) {
        const ref = refs[i]

        if (ref != null) {
          if (typeof ref === 'function') {
            ref($ref)
          }
          if (typeof ref === 'object') {
            Object.defineProperty(ref, 'current', {
              writable: false,
              value: $ref,
            })
          }
          if (typeof ref === 'string') {
            console.warn('Deprecate So I Not Implement It')
          }
        }

        i++
      }
    },
    [refs]
  )
}
