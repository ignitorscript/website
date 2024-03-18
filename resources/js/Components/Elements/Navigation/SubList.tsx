import { createForwardRef } from '@ignition-concept/create-forwardref'

export const List = createForwardRef('ul', (props, ref) => {
  return <ul {...props} ref={ref} />
})
