import { createForwardRef, type Props, type Ref } from '~/js/Utilities/createForwardRef'
import { SubContainer } from '~/js/Components/Elements/Header/types'

export const Link = createForwardRef<Ref<'a'>, Props<'a', SubContainer>>(
  'Header.Link',
  ({ 'sub-nav': subNav = false, ...props }, ref) => {
    return (
      <a {...props} ref={ref}>
        {props.children}
      </a>
    )
  }
)
