import { createForwardRef } from '@ignition-concept/create-forwardref'
import { useNavigationRoot } from './Root'
import { useId, useMemo } from 'react'
import { makeName, injectStyle } from './utils'
import useComposedRefs from '~/js/Hooks/useComposedRefs'

export const Portal = createForwardRef('div', ({ children, ...props }, ref) => {
  const root = useNavigationRoot()
  const id = useId()

  if (!root) {
    throw new Error('E_CANNOT_FIND_ROOT: cannot find root `Navigation.Root`')
  }

  const innerRef = useComposedRefs(ref, root.portalRef)

  const baseId = useMemo(() => makeName('portal', id, root.baseId), [root, id])

  return (
    <div
      {...props}
      style={{
        ...props.style,
        ...injectStyle({ '--navigation-portal-offset-top': `${root.portalOffset}px` }),
      }}
      ref={innerRef}
      data-navigation-portal={baseId}
    />
  )
})
