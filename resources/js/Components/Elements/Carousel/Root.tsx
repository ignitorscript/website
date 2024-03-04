import { createForwardRef } from 'ignitor.create-forwardedrefs'

export const Root = createForwardRef('div', (props, ref) => {
  return <div {...props} ref={ref} />
})
