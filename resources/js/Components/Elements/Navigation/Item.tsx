import { createForwardRef } from '@ignition-concept/create-forwardref'

export const Item = createForwardRef('li', (props, ref) => {
  return <li {...props} ref={ref} />
})
