import { createForwardRef } from '@ignition-concept/create-forwardref'
import { useNavigationItem } from './Item'
import { useId, useMemo } from 'react'
import { makeName } from './utils'
import { useNavigationRoot } from './Root'

export const Panel = createForwardRef('div', (props, ref) => {
  const item = useNavigationItem()
  const root = useNavigationRoot()
  const id = useId()

  if (!item) {
    throw new Error('E_CANNOT_FIND_ROOT: cannot find root `Navigation.Item`')
  }

  if (!root) {
    throw new Error('E_CANNOT_FIND_ROOT: cannot find root `Navigation.Root`')
  }

  const baseId = useMemo(() => makeName('panel', id, item.baseId), [item, id])

  if (!root.tracking) {
    return null
  }

  if (item.baseId !== root.currentActiveId) {
    return null
  }

  return <div {...props} ref={ref} data-navigation-panel={baseId} />
})
