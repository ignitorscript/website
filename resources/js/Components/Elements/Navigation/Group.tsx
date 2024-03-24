import { createForwardRef } from '@ignition-concept/create-forwardref'

export const Group = createForwardRef('header', (props, ref) => {
  return <header {...props} ref={ref} />
})
