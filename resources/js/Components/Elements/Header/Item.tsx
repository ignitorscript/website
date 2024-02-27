import { unsafe_createForwardRef as createForwardRef } from '~/js/Utilities/createForwardRef'

export const Item = createForwardRef('li', (props, ref) => {
  return <li {...props} ref={ref} />
})
