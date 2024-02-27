import { unsafe_createForwardRef as createForwardRef } from '~/js/Utilities/createForwardRef'

export const Viewport = createForwardRef('div', (props, ref) => {
  return <div {...props} ref={ref} />
})
