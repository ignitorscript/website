import { createForwardRef } from '@ignition-concept/create-forwardref'
import { useId, useMemo, useReducer, useRef } from 'react'
import { createReactContext } from '~/js/Utilities/createReactContext'
import { makeName } from './utils'
import { useNavigationGroup } from './Group'

type NavigationRootAction =
  | {
      action: 'register:current-id'
      id: string
    }
  | {
      action: 'unregister:current-id'
    }
  | {
      action: 'enable:tracking'
    }
  | {
      action: 'disable:tracking'
    }

interface NavigationRootState {
  currentActiveId: string | null
  tracking: boolean
}

interface NavigationRootContext extends NavigationRootState {
  baseId: string
  portalRef: React.MutableRefObject<HTMLDivElement | null>
  dispatch: React.Dispatch<NavigationRootAction>
}

const rootReducer: React.Reducer<NavigationRootState, NavigationRootAction> = (state, action) => {
  switch (action.action) {
    case 'register:current-id': {
      return { ...state, currentActiveId: action.id }
    }

    case 'unregister:current-id': {
      return { ...state, currentActiveId: null }
    }

    case 'disable:tracking': {
      return { ...state, tracking: false }
    }

    case 'enable:tracking': {
      return { ...state, tracking: true }
    }

    default: {
      return state
    }
  }
}

const rootState: NavigationRootState = {
  currentActiveId: null,
  tracking: false,
}

export const [NavigationRoot, useNavigationRoot] =
  createReactContext<NavigationRootContext>('NavigationRootContext')

export const Root = createForwardRef('nav', (props, ref) => {
  const id = useId()
  const group = useNavigationGroup()
  const [state, dispatch] = useReducer(rootReducer, rootState)
  const portalRef = useRef<HTMLDivElement | null>(null)

  const baseId = useMemo(() => {
    if (group) {
      return makeName('root', id, group.baseId)
    }
    return makeName('root', id)
  }, [id, group])

  return (
    <NavigationRoot.Provider portalRef={portalRef} baseId={baseId} dispatch={dispatch} {...state}>
      <nav {...props} ref={ref} data-navigation={baseId} />
    </NavigationRoot.Provider>
  )
})
