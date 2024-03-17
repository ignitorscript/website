import { createForwardRef } from '@ignition-concept/create-forwardref'
import { useId, useMemo, useRef } from 'react'
import { createReactContext } from '~/js/Utilities/createReactContext'
import { useNavigationRoot } from './Root'
import { makeName } from './utils'
import useComposedRefs from '~/js/Hooks/useComposedRefs'
import useIsomophicEffectOnce from '~/js/Hooks/useIsomophicEffectOnce'

interface NavigationListContext {
  baseId: string
}

export const [NavigationList, useNavigationList] =
  createReactContext<NavigationListContext>('NavigationListContext')

export const List = createForwardRef('ul', (props, ref) => {
  const id = useId()
  const root = useNavigationRoot()
  const internalRef = useRef<HTMLUListElement | null>(null)
  const innerRef = useComposedRefs(ref, internalRef)

  if (!root) {
    throw new Error(
      'E_CANNOT_FIND_ROOT: cannot find root `Navigation.Root` and `Navigation.List` must inside `Navigation.Root`'
    )
  }

  useIsomophicEffectOnce(() => {
    if (internalRef.current) {
      root.dispatch({
        action: 'set:offset-portal',
        top: internalRef.current.offsetTop + internalRef.current.offsetHeight,
      })
    }
  })

  const baseId = useMemo(() => makeName('list', id, root.baseId), [id, root])

  return (
    <NavigationList.Provider baseId={baseId}>
      <ul {...props} ref={innerRef} data-navigation-list={baseId} />
    </NavigationList.Provider>
  )
})
