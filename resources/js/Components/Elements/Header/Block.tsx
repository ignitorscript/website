import { createForwardRef } from 'ignitor.create-forwardedrefs'

export const Block = createForwardRef('div', (props, ref) => {
  return <div {...props} ref={ref} />
})
