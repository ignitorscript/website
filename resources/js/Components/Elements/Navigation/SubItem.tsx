import { createForwardRef } from '@ignition-concept/create-forwardref'

export const SubItem = createForwardRef('li', (props, ref) => {
  return <li {...props} ref={ref} />
})
