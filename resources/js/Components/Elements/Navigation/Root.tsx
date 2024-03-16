import { createForwardRef } from '@ignition-concept/create-forwardref'
import { useId, useMemo, useReducer, useRef } from 'react'
import { createReactContext } from '~/js/Utilities/createReactContext'
import { makeName } from './utils'
import { useNavigationGroup } from './Group'

type NavigationRootAction = {}

interface NavigationRootState {}

interface NavigationRootContext {
  baseId: string
  portalRef: React.MutableRefObject<HTMLDivElement | null>
}

const rootReducer: React.Reducer<NavigationRootState, NavigationRootAction> = (state, action) => {
  return state
}

const rootState: NavigationRootState = {}

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
    <NavigationRoot.Provider portalRef={portalRef} baseId={baseId}>
      <nav {...props} ref={ref} data-navigation={baseId} />
    </NavigationRoot.Provider>
  )
})
