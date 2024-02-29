import { createForwardRef } from 'ignitor.create-forwardedrefs'

export const Trigger = createForwardRef('button', (props, ref) => {
  return <button {...props} ref={ref} />
})
