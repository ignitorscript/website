import { createForwardRef } from 'ignitor.create-forwardedrefs'

export const Content = createForwardRef('div', (props, ref) => {
  return <div {...props} ref={ref} />
})
