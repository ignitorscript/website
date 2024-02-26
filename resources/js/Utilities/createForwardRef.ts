import React from 'react'

export function unsafe_createForwardRef<
  TTag extends
    | keyof React.JSX.IntrinsicElements
    | React.ForwardRefExoticComponent<any>
    | React.ComponentType,
>(
  tag: TTag,
  render: React.ForwardRefRenderFunction<
    React.ElementRef<TTag>,
    React.ComponentPropsWithoutRef<TTag>
  >
) {
  const Forwarded = React.forwardRef(render)

  Forwarded.displayName = `forwardRef(${typeof tag === 'string' ? `${tag as keyof React.JSX.IntrinsicElements}` : tag.displayName})`

  return Forwarded
}
