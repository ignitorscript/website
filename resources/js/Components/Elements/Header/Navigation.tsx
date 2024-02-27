import { unsafe_createForwardRef as createForwardRef } from '~/js/Utilities/createForwardRef'
export const Navigation = createForwardRef('nav', (props, ref) => {
  return <nav {...props} ref={ref} />
})
