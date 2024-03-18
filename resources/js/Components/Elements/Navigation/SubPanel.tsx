import { createForwardRef } from '@ignition-concept/create-forwardref'

export const Panel = createForwardRef('div', (props, ref) => {
  return <div {...props} ref={ref} />
})
