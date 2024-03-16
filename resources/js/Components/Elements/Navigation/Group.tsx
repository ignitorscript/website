import { createForwardRef } from '@ignition-concept/create-forwardref'
import { useId, useMemo } from 'react'
import { createReactContext } from '~/js/Utilities/createReactContext'
import { makeName } from './utils'

interface NavigationGroupContext {
  baseId: string
}

export const [NavigationGroup, useNavigationGroup] =
  createReactContext<NavigationGroupContext>('NavigationGroupContext')

export const Group = createForwardRef('header', (props, ref) => {
  const id = useId()

  const baseId = useMemo(() => makeName('group', id), [id])

  return (
    <NavigationGroup.Provider baseId={baseId}>
      <header {...props} ref={ref} data-header={baseId} />
    </NavigationGroup.Provider>
  )
})
