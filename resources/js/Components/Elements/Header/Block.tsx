import { unsafe_createForwardRef as createForwardRef } from '~/js/Utilities/createForwardRef'

export const Block = createForwardRef('div', (props, ref) => {
  return <div {...props} ref={ref} />
})
