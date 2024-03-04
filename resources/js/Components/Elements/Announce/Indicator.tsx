import { createForwardRef } from 'ignitor.create-forwardedrefs'

export const Indicator = createForwardRef('span', (props, ref) => {
  return <span {...props} ref={ref} />
})
