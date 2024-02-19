import { createForwardRef, type Props, type Ref } from '~/js/Utilities/createForwardRef'

export const Block = createForwardRef<Ref<'div'>, Props<'div'>>('Header.Block', (props, ref) => {
  return <div {...props} ref={ref} />
})
