import { createForwardRef, type Props, type Ref } from '~/js/Utilities/createForwardRef'
import { SubContainer } from '~/js/Components/Elements/Header/types'
import { ItemProvider } from '~/js/Components/Elements/Header/context'

export const Item = createForwardRef<Ref<'li'>, Props<'li', SubContainer>>(
  'Header.Item',
  ({ 'sub-nav': subNav = false, ...props }, ref) => {
    return (
      <ItemProvider>
        <li {...props} ref={ref} />
      </ItemProvider>
    )
  }
)
