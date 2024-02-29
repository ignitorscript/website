import { createForwardRef } from 'ignitor.create-forwardedrefs'

export const Sub = createForwardRef('div', (props, ref) => {
  return <div {...props} ref={ref} />
})
