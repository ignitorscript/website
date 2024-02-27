import { unsafe_createForwardRef as createForwardRef } from '~/js/Utilities/createForwardRef'

export const List = createForwardRef('ul', (props, ref) => {
  return <ul {...props} ref={ref} />
})
