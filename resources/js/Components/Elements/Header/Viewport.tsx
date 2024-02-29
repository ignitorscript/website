import { createForwardRef } from 'ignitor.create-forwardedrefs'

export const Viewport = createForwardRef('div', (props, ref) => {
  return <div {...props} ref={ref} />
})
