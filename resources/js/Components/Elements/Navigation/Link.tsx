import { createForwardRef } from '@ignition-concept/create-forwardref'

export const Link = createForwardRef('a', (props, ref) => {
  return <a {...props} ref={ref} children={props.children} />
})
