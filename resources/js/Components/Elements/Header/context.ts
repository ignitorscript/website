import { createReactContext } from '../../../Utilities/createReactContext'
import {
  IHeaderContext,
  INavigationContext,
  ISubContainerContext,
  IItemContext,
} from '~/js/Components/Elements/Header/types'

export const [
  { Provider: SubContainerProvider, Consumer: SubContainerConsumer, Context: SubContainerContext },
  useSubContainerContext,
] = createReactContext<ISubContainerContext>('SubContainer')

export const [
  { Provider: HeaderProvider, Consumer: HeaderConsumer, Context: HeaderContext },
  useHeaderContext,
] = createReactContext<IHeaderContext>('Header')

export const [
  { Provider: ItemProvider, Consumer: ItemConsumer, Context: ItemContext },
  useItemContext,
] = createReactContext<IItemContext>('Item')

export const [
  { Provider: NavigationProvider, Consumer: NavigationConsumer, Context: NavigationContext },
  useNavigationContext,
] = createReactContext<INavigationContext>('Navigation')
