import { createForwardRef } from '@ignition-concept/create-forwardref'

export const SubButton = createForwardRef('button', (props, ref) => {
  return <button {...props} ref={ref} />
})
