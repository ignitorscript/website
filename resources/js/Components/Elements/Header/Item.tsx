import { createForwardRef } from 'ignitor.create-forwardedrefs'
import { useRef } from 'react'
import { useHoverDirty } from 'react-use'
import useComposedRefs from '~/js/Hooks/useComposedRefs'

export const Item = createForwardRef('li', (props, ref) => {
  const internalRef = useRef<HTMLLIElement>(null)
  const hover = useHoverDirty(internalRef)
  const innerRef = useComposedRefs(ref, internalRef)

  return <li {...props} ref={innerRef} data-hover={hover} />
})
