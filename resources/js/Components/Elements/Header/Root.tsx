import { unsafe_createForwardRef as createForwardRef } from '~/js/Utilities/createForwardRef'

export const Root = createForwardRef('header', (props, ref) => {
  return <header {...props} ref={ref} />
})
