import React from 'react'

interface EventHandlerComposed<T extends Element = Element, E extends Event = Event> {
  (event: React.SyntheticEvent<T, E>, next: () => void): void
}

/**
 *
 *  chain event to using in react event handler
 *
 * @param handlers all of event chainning
 * @example
 * unsafe_createComposedEventHandler(
 *  (_event, next) => {
 *    console.log('pipe one')
 *
 *    next()
 *  },
 *  () => {
 *    console.log('end of the pipe')
 *  }
 *)
 * @returns an react event handler
 */
export function unsafe_createComposedEventHandler<
  T extends Element = Element,
  E extends Event = Event,
>(...handlers: EventHandlerComposed<T, E>[]) {
  let i = 0
  const handle = (event: React.SyntheticEvent<T, E>) => {
    if (i < handlers.length) {
      const handler = handlers[i]

      handler(event, () => {
        i++
        handle(event)
      })
    }
  }

  return (event: React.SyntheticEvent<T, E>) => {
    handle(event)
  }
}

/**
 * @description for component creator only
 * @param item props need to pass to custom component
 * @returns base `createComposedEventHandler` handler
 */
export const eventProps = <
  I extends React.EventHandler<React.SyntheticEvent<T, E>>,
  T extends Element = Element,
  E extends Event = Event,
>(
  item: I | undefined
): EventHandlerComposed<T, E> => {
  return (event: React.SyntheticEvent<T, E>, _next: () => void) => {
    item?.(event)
  }
}
