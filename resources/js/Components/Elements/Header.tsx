import { createForwardRef, type Props, type Ref } from '../../Utilities/createForwardRef'

export const Root = createForwardRef<Ref<'header'>, Props<'header'>>(
  'Header.Root',
  (props, ref) => {
    return <header {...props} ref={ref} />
  }
)

export const Navigation = createForwardRef<Ref<'nav'>, Props<'nav'>>(
  'Header.Navigation',
  (props, ref) => {
    return <nav {...props} ref={ref} />
  }
)

export const Block = createForwardRef<Ref<'div'>, Props<'div'>>('Header.Block', (props, ref) => {
  return <div {...props} ref={ref} />
})

export const List = createForwardRef<Ref<'ul'>, Props<'ul'>>('Header.List', (props, ref) => {
  return <ul {...props} ref={ref} />
})

export const Sub = createForwardRef<Ref<'ul'>, Props<'ul'>>('Header.Sub', (props, ref) => {
  return <ul {...props} ref={ref} />
})

export const Viewport = createForwardRef<Ref<'div'>, Props<'div'>>(
  'Header.Viewport',
  (props, ref) => {
    return <div {...props} ref={ref} />
  }
)

export const Item = createForwardRef<Ref<'li'>, Props<'li'>>('Header.Item', (props, ref) => {
  return <li {...props} ref={ref} />
})

export const Link = createForwardRef<Ref<'a'>, Props<'a'>>('Header.Link', (props, ref) => {
  return (
    <a {...props} ref={ref}>
      {props.children}
    </a>
  )
})

export const Trigger = createForwardRef<Ref<'button'>, Props<'button'>>(
  'Header.Trigger',
  (props, ref) => {
    return <button {...props} ref={ref} />
  }
)

export const Content = createForwardRef<Ref<'div'>, Props<'div'>>(
  'Header.Content',
  (props, ref) => {
    return <div {...props} ref={ref} />
  }
)
