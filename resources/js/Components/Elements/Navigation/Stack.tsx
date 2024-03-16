import { createForwardRef } from '@ignition-concept/create-forwardref'
import { useId, useMemo } from 'react'
import { useNavigationRoot } from './Root'
import { makeName } from './utils'
import { createReactContext } from '~/js/Utilities/createReactContext'

interface NavigationStackContext {
  baseId: string
}

export const [NavigationStack, useNavigationStack] =
  createReactContext<NavigationStackContext>('NavigationStackContext')

export const Stack = createForwardRef('div', (props, ref) => {
  const id = useId()
  const root = useNavigationRoot()
  if (!root) {
    throw new Error(
      'E_CANNOT_FIND_ROOT: cannot find root `Navigation.Root` and `Navigation.List` must inside `Navigation.Root`'
    )
  }

  const baseId = useMemo(() => {
    return makeName('stack', id, root.baseId)
  }, [id, root])

  return (
    <NavigationStack.Provider baseId={baseId}>
      <div {...props} ref={ref} data-navigation-stack-container={baseId} />
    </NavigationStack.Provider>
  )
})
