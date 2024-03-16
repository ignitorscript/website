import { createForwardRef } from '@ignition-concept/create-forwardref'
import { useNavigationItem } from './Item'
import { useId, useMemo } from 'react'
import { makeName } from './utils'

export const Panel = createForwardRef('div', (props, ref) => {
  const item = useNavigationItem()
  const id = useId()

  if (!item) {
    throw new Error('E_CANNOT_FIND_ROOT: cannot find root `Navigation.Item`')
  }

  const baseId = useMemo(() => makeName('panel', id, item.baseId), [item, id])

  return <div {...props} ref={ref} data-navigation-panel={baseId} />
})
