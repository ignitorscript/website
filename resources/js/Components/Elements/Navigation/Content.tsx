import { createForwardRef } from '@ignition-concept/create-forwardref'
import { makeName } from './utils'
import { useId, useMemo } from 'react'
import { useNavigationItem } from './Item'
import { useNavigationRoot } from './Root'

export const Content = createForwardRef('div', (props, ref) => {
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

  return <div {...props} ref={ref} data-navigation-content={baseId} />
})
