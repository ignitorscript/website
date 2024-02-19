import { createForwardRef, type Props, type Ref } from '~/js/Utilities/createForwardRef'
import { SubContainer } from '~/js/Components/Elements/Header/types'
import { useRef } from 'react'
export const Trigger = createForwardRef<Ref<'button'>, Props<'button', SubContainer>>(
  'Header.Trigger',
  ({ 'sub-nav': subNav = false, ...props }, ref) => {
    return <button {...props} ref={ref} />
  }
)
