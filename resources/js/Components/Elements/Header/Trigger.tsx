import { unsafe_createForwardRef as createForwardRef } from '~/js/Utilities/createForwardRef'

export const Trigger = createForwardRef('button', (props, ref) => {
  return <button {...props} ref={ref} />
})
