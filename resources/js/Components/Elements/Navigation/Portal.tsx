import { createForwardRef } from '@ignition-concept/create-forwardref'

export const Portal = createForwardRef('div', ({ children, ...props }, ref) => {
  return <div {...props} ref={ref} />
})
