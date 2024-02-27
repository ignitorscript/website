import { unsafe_createForwardRef as createForwardRef } from '~/js/Utilities/createForwardRef'

export const Link = createForwardRef('a', (props, ref) => {
  return (
    <a {...props} ref={ref}>
      {props.children}
    </a>
  )
})
