import { createForwardRef } from 'ignitor.create-forwardedrefs'

export const Previous = createForwardRef('button', (props, ref) => {
  return <button {...props} ref={ref} />
})
