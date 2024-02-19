import { createForwardRef, type Props, type Ref } from '~/js/Utilities/createForwardRef'
import { NavigationProvider } from '~/js/Components/Elements/Header/context'

export const Navigation = createForwardRef<Ref<'nav'>, Props<'nav'>>(
  'Header.Navigation',
  (props, ref) => {
    return (
      <NavigationProvider>
        <nav {...props} ref={ref} />
      </NavigationProvider>
    )
  }
)
