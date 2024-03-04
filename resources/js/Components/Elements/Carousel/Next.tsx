import { createForwardRef } from 'ignitor.create-forwardedrefs'

export const Next = createForwardRef('button', (props, ref) => {
  return <button {...props} ref={ref} />
})
