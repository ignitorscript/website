import { createForwardRef } from '@ignition-concept/create-forwardref'

export const Content = createForwardRef('div', (props, ref) => {
  return <div {...props} ref={ref} />
})
