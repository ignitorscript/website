import { createForwardRef } from '@ignition-concept/create-forwardref'
import { useNavigationRoot } from './Root'
import { useNavigationStack } from './Stack'
import { useNavigationList } from './List'
import { useId, useMemo } from 'react'
import { makeName } from './utils'
import { createReactContext } from '~/js/Utilities/createReactContext'
import {
  createComposedEventHandler,
  eventProps,
} from '@ignition-concept/create-composed-event-handler'

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

  if (!root) {
    throw new Error('E_CANNOT_FIND_ROOT: cannot find root `Navigation.Root`')
  }

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
      <li
        {...props}
        ref={ref}
        onPointerEnter={createComposedEventHandler((_event, next) => {
          if (!omit) {
            root.dispatch({
              action: 'register:current-id',
              id: baseId,
            })
          }

          return next()
        }, eventProps(props.onPointerEnter))}
        onPointerLeave={createComposedEventHandler((_event, next) => {
          if (!omit) {
            root.dispatch({
              action: 'unregister:current-id',
            })
          }

          return next()
        }, eventProps(props.onPointerLeave))}
        data-exclude-item={omit}
        data-navigation-list-item={baseId}
      />
    </NavigationItem.Provider>
  )
})
