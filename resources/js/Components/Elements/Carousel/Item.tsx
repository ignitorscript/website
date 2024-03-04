import { createForwardRef } from 'ignitor.create-forwardedrefs'

export const Item = createForwardRef('li', (props, ref) => {
  return <li {...props} ref={ref} />
})
