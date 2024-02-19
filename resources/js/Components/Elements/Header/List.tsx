import { createForwardRef, type Props, type Ref } from '~/js/Utilities/createForwardRef'
import { SubContainer } from '~/js/Components/Elements/Header/types'

/*----------------------------------------------------------
 * Base Navigation Menu
 -----------------------------------------------------------*/

export const List = createForwardRef<Ref<'ul'>, Props<'ul', SubContainer>>(
  'Header.List',
  ({ 'sub-nav': subNav = false, ...props }, ref) => {
    return <ul {...props} ref={ref} />
  }
)
