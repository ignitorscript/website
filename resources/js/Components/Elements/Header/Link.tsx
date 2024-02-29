import { createForwardRef } from 'ignitor.create-forwardedrefs'

export const Link = createForwardRef('a', (props, ref) => {
  return (
    <a {...props} ref={ref}>
      {props.children}
    </a>
  )
})
