import { createForwardRef, type Props, type Ref } from '~/js/Utilities/createForwardRef'
import { SubContainer } from '~/js/Components/Elements/Header/types'

export const Content = createForwardRef<Ref<'div'>, Props<'div', SubContainer>>(
  'Header.Content',
  ({ 'sub-nav': subNav = false, ...props }, ref) => {
    return <div {...props} ref={ref} />
  }
)
