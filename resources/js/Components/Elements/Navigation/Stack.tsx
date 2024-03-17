import { PropTypes, createForwardRef } from '@ignition-concept/create-forwardref'
import { useId, useMemo, useState } from 'react'
import { useNavigationRoot } from './Root'
import { makeName } from './utils'
import { createReactContext } from '~/js/Utilities/createReactContext'
import {
  createComposedEventHandler,
  eventProps,
} from '@ignition-concept/create-composed-event-handler'

interface NavigationStackContext {
  baseId: string
}

export const [NavigationStack, useNavigationStack] =
  createReactContext<NavigationStackContext>('NavigationStackContext')

export const Stack = createForwardRef(
  {
    tag: 'div',
    propTypes: {
      focusable: PropTypes.bool,
    },
    displayName: 'div',
  },
  ({ focusable = false, ...props }, ref) => {
    const id = useId()
    const root = useNavigationRoot()
    const [focus, setFocus] = useState(false)
    if (!root) {
      throw new Error(
        'E_CANNOT_FIND_ROOT: cannot find root `Navigation.Root` and `Navigation.List` must inside `Navigation.Root`'
      )
    }

    const baseId = useMemo(() => {
      return makeName('stack', id, root.baseId)
    }, [id, root])

    const focusableProps = useMemo(() => {
      if (focusable) {
        return {
          'data-focus': focus,
          'onFocus': createComposedEventHandler((_event, next) => {
            setFocus(() => true)

            return next()
          }, eventProps(props.onFocus)),
          'onBlur': createComposedEventHandler((_event, next) => {
            setFocus(() => false)

            return next()
          }, eventProps(props.onBlur)),
        }
      }
      return {}
    }, [focus, focusable, props.onBlur, props.onFocus])

    return (
      <NavigationStack.Provider baseId={baseId}>
        <div {...props} ref={ref} data-navigation-stack-container={baseId} {...focusableProps} />
      </NavigationStack.Provider>
    )
  }
)
