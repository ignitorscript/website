import { createForwardRef } from '@ignition-concept/create-forwardref'

export const Menu = createForwardRef('nav', (props, ref) => {
  return <nav {...props} ref={ref} />
})
