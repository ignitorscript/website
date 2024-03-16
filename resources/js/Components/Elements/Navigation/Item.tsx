import { createForwardRef } from '@ignition-concept/create-forwardref'
import { useNavigationRoot } from './Root'
import { useNavigationStack } from './Stack'
import { useNavigationList } from './List'
import { useId, useMemo } from 'react'
import { makeName } from './utils'
import { createReactContext } from '~/js/Utilities/createReactContext'

interface NavigationItemContext {
  baseId: string
}

export const [NavigationItem, useNavigationItem] =
  createReactContext<NavigationItemContext>('NavigationItemContext')

export const Item = createForwardRef('li', (props, ref) => {
  const root = useNavigationRoot()
  const stack = useNavigationStack()
  const list = useNavigationList()
  const id = useId()

  const omit = useMemo(() => {
    if (stack) {
      return true
    }
    if (list) {
      return false
    }
    return false
  }, [stack, list])

  const baseId = useMemo(() => {
    if (stack) {
      return makeName('item', id, stack.baseId)
    }
    if (list) {
      return makeName('item', id, list.baseId)
    }
    return makeName('item', id)
  }, [stack, list, id])

  return (
    <NavigationItem.Provider baseId={baseId}>
      <li {...props} ref={ref} data-exclude-item={omit} data-navigation-list-item={baseId} />
    </NavigationItem.Provider>
  )
})
