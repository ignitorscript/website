import React from 'react'

export const createForwardRef = <T, P>(
  name: string,
  render: React.ForwardRefRenderFunction<T, P>
) => {
  const Forwarded = React.forwardRef(render)

  Forwarded.displayName = name

  return Forwarded
}

export type Ref<TTag extends keyof React.JSX.IntrinsicElements | React.ComponentType> =
  React.ElementRef<TTag>

export type Props<
  TTag extends keyof React.JSX.IntrinsicElements | React.ComponentType,
  TProps extends object = {},
> = Omit<React.ComponentPropsWithoutRef<TTag>, keyof TProps> & TProps
