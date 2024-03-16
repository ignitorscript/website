import { createForwardRef } from '@ignition-concept/create-forwardref'
import { useNavigationItem } from './Item'
import { useNavigationStack } from './Stack'
import { useId, useMemo } from 'react'
import { makeName } from './utils'

export const Link = createForwardRef('a', (props, ref) => {
  const item = useNavigationItem()
  const stack = useNavigationStack()
  const id = useId()

  const strict = useMemo(() => {
    if (stack) {
      return false
    }
    return true
  }, [stack])

  const baseId = useMemo(() => {
    if (strict && item) {
      return makeName('anchor', id, item.baseId)
    }
    return makeName('anchor', id)
  }, [strict, item, id])

  if (!strict) {
    return (
      <a {...props} ref={ref} data-strict={strict} data-navigation-anchor={baseId}>
        {props.children}
      </a>
    )
  }

  if (!item) {
    throw new Error('E_CANNOT_FIND_ITEM_CONTAINER: cannot find item container')
  }

  return (
    <a {...props} ref={ref} data-strict={strict} data-navigation-anchor={baseId}>
      {props.children}
    </a>
  )
})
