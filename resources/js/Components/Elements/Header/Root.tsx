import { createForwardRef } from 'ignitor.create-forwardedrefs'

export const Root = createForwardRef('header', (props, ref) => {
  return <header {...props} ref={ref} />
})
