import { createForwardRef } from 'ignitor.create-forwardedrefs'
export const Navigation = createForwardRef('nav', (props, ref) => {
  return <nav {...props} ref={ref} />
})
