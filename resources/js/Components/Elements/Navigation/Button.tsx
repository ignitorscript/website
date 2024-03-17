import { createForwardRef } from '@ignition-concept/create-forwardref'
import {
  createComposedEventHandler,
  eventProps,
} from '@ignition-concept/create-composed-event-handler'
import { useNavigationItem } from './Item'
import React, { useId, useMemo } from 'react'
import { makeName } from './utils'
import { useNavigationRoot } from './Root'

export const Button = createForwardRef('button', (props, ref) => {
  const item = useNavigationItem()
  const root = useNavigationRoot()
  const id = useId()

  if (!root) {
    throw new Error(
      'E_CANNOT_FIND_ROOT: cannot find root `Navigation.Root` and `Navigation.Button` Must be inside `Navigation.Root`'
    )
  }

  if (!item) {
    throw new Error(
      'E_CANNOT_FIND_ROOT: cannot find root `Navigation.Item` and `Navigation.Button` Must be inside `Navigation.Item`'
    )
  }

  const baseId = useMemo(() => makeName('panel', id, item.baseId), [item, id])

  return (
    <button
      {...props}
      ref={ref}
      data-navigation-button={baseId}
      onClick={createComposedEventHandler((_event, next) => {
        if (root.tracking) {
          root.dispatch({
            action: 'disable:tracking',
          })

          return next()
        }

        if (!root.tracking) {
          root.dispatch({
            action: 'enable:tracking',
          })

          return next()
        }

        return next()
      }, eventProps(props.onClick))}
      onKeyDown={createComposedEventHandler((event, next) => {
        event.preventDefault()

        const reactKeyboardEvent = event as unknown as React.KeyboardEvent<HTMLButtonElement>

        if (reactKeyboardEvent.code === 'Space') {
          if (root.tracking) {
            root.dispatch({
              action: 'disable:tracking',
            })

            return next()
          }

          if (!root.tracking) {
            root.dispatch({
              action: 'enable:tracking',
            })

            return next()
          }
        }

        if (reactKeyboardEvent.code === 'Enter') {
          if (root.tracking) {
            root.dispatch({
              action: 'disable:tracking',
            })

            return next()
          }

          if (!root.tracking) {
            root.dispatch({
              action: 'enable:tracking',
            })

            return next()
          }
        }

        return next()
      }, eventProps(props.onKeyDown))}
    />
  )
})
