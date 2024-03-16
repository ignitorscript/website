import { createForwardRef } from '@ignition-concept/create-forwardref'
import { useId, useMemo } from 'react'
import { createReactContext } from '~/js/Utilities/createReactContext'
import { useNavigationRoot } from './Root'
import { makeName } from './utils'

interface NavigationListContext {
  baseId: string
}

export const [NavigationList, useNavigationList] =
  createReactContext<NavigationListContext>('NavigationListContext')

export const List = createForwardRef('ul', (props, ref) => {
  const id = useId()
  const root = useNavigationRoot()
  if (!root) {
    throw new Error(
      'E_CANNOT_FIND_ROOT: cannot find root `Navigation.Root` and `Navigation.List` must inside `Navigation.Root`'
    )
  }

  const baseId = useMemo(() => makeName('list', id, root.baseId), [id, root])

  return (
    <NavigationList.Provider baseId={baseId}>
      <ul {...props} ref={ref} data-navigation-list={baseId} />
    </NavigationList.Provider>
  )
})
