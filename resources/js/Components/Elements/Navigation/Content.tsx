import { createForwardRef } from '@ignition-concept/create-forwardref'
import { makeName } from './utils'
import { useId, useMemo } from 'react'
import { useNavigationItem } from './Item'
import { useNavigationRoot } from './Root'
import { createPortal } from 'react-dom'

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

  const renderer = useMemo(
    () => <div {...props} ref={ref} data-navigation-content={baseId} />,
    [props, ref, baseId]
  )

  if (!root.tracking) {
    return null
  }

  if (!root.portalRef.current) {
    throw new Error(
      'E_CANNOT_FIND_PORTAL: cannot find portal `Navigation.Portal`, i suggest you using `Navigation.Panel` instead if you only want content containing inside `Navigation.Item`'
    )
  }

  if (item.baseId !== root.currentActiveId) {
    return null
  }

  return <>{createPortal(renderer, root.portalRef.current)}</>
})
