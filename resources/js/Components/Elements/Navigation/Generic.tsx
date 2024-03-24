import { createForwardRef } from '@ignition-concept/create-forwardref'

export const Generic = createForwardRef('div', (props, ref) => {
  return <div {...props} ref={ref} />
})
