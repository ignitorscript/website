import { createForwardRef } from 'ignitor.create-forwardedrefs'

export const List = createForwardRef('ul', (props, ref) => {
  return <ul {...props} ref={ref} />
})
