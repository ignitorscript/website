import { createForwardRef } from '@ignition-concept/create-forwardref'
import { useId, useMemo, useReducer } from 'react'
import { createReactContext } from '~/js/Utilities/createReactContext'
import { makeName } from './utils'

interface NavigationGroupState {
  currentActiveId: string | null
}

type NavigationGroupAction = {}

interface NavigationGroupContext extends NavigationGroupState {
  baseId: string
  dispatch: React.Dispatch<NavigationGroupAction>
}

const groupReducer: React.Reducer<NavigationGroupState, NavigationGroupAction> = (state) => state

const groupInitialState: NavigationGroupState = {
  currentActiveId: null,
}

export const [NavigationGroup, useNavigationGroup] =
  createReactContext<NavigationGroupContext>('NavigationGroupContext')

export const Group = createForwardRef('header', (props, ref) => {
  const id = useId()
  const [state, dispatch] = useReducer(groupReducer, groupInitialState)

  const baseId = useMemo(() => makeName('group', id), [id])

  return (
    <NavigationGroup.Provider baseId={baseId} {...state} dispatch={dispatch}>
      <header {...props} ref={ref} data-header={baseId} />
    </NavigationGroup.Provider>
  )
})
