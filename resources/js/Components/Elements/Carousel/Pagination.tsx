import { createForwardRef } from 'ignitor.create-forwardedrefs'

export const Pgination = createForwardRef('div', (props, ref) => {
  return <div {...props} ref={ref} />
})
