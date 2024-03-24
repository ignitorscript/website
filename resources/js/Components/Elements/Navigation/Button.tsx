import { createForwardRef } from '@ignition-concept/create-forwardref'

export const Button = createForwardRef('button', (props, ref) => {
  return <button {...props} ref={ref} />
})
