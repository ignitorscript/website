import { Props, Ref, createForwardRef } from '~/js/Utilities/createForwardRef'
import { SubContainerProvider } from '~/js/Components/Elements/Header/context'
import { SubContainer } from '~/js/Components/Elements/Header/types'

export const Sub = createForwardRef<Ref<'div'>, Props<'div', SubContainer>>(
  'Header.Sub',
  ({ 'sub-nav': subNav = false, ...props }, ref) => {
    return (
      <SubContainerProvider>
        <div {...props} ref={ref} />
      </SubContainerProvider>
    )
  }
)
