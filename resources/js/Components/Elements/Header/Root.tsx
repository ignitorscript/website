import { useId, useMemo } from 'react'
import { Props, Ref, createForwardRef } from '~/js/Utilities/createForwardRef'
import { HeaderProvider } from '~/js/Components/Elements/Header/context'

export const Root = createForwardRef<Ref<'header'>, Props<'header'>>(
  'Header.Root',
  (props, ref) => {
    const id = useId()

    const headerId = useMemo(() => `header-${id}`, [id])

    return (
      <HeaderProvider headerId={headerId}>
        <header {...props} ref={ref} />
      </HeaderProvider>
    )
  }
)
