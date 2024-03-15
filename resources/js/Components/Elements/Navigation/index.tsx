import { createReactContext } from '~/js/Utilities/createReactContext'
import { createForwardRef } from '@ignition-concept/create-forwardref'
import React, { useReducer, useState } from 'react'

/*
 |=========================================\
 |                                          |
 |            Navigation.Root               |
 |                                          |
 |=========================================/
 */

interface NavigationRootState {
  isPortalUsage: boolean
}

type NavigationRootAction = {}

const navigationRootReducer: React.Reducer<NavigationRootState, NavigationRootAction> = (state) => {
  return state
}

const navigationRootState: NavigationRootState = {
  isPortalUsage: false,
}

interface NavigationRootContext {
  isPortalUsage: boolean
  portalElement: HTMLDivElement | null
  setPortalElement: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>
  dispatch: React.Dispatch<NavigationRootAction>
}

const [NavigtionRoot, useNavigationRoot] =
  createReactContext<NavigationRootContext>('NavigationRoot')

export const Root = createForwardRef('nav', (props, ref) => {
  const [state, dispatch] = useReducer(navigationRootReducer, navigationRootState)
  const [portalElement, setPortalElement] = useState<null | HTMLDivElement>(null)

  return (
    <NavigtionRoot.Provider
      portalElement={portalElement}
      setPortalElement={setPortalElement}
      isPortalUsage={state.isPortalUsage}
      dispatch={dispatch}
    >
      <nav {...props} ref={ref} />
    </NavigtionRoot.Provider>
  )
})

/*
 |=========================================\
 |                                          |
 |            Navigation.Portal             |
 |                                          |
 |=========================================/
 */

export const Portal = createForwardRef('div', (props, ref) => {
  const root = useNavigationRoot()

  if (!root) {
    throw new Error('E_CANNOT_FIND_ROOT: cannot find root')
  }

  return <div {...props} ref={ref} />
})
