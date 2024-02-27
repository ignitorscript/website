import React from 'react'

type MessageType = 'info' | 'log' | 'warn' | 'error'

type Message = [MessageType, string]

interface EventHandlerComposed<T extends Element = Element, E extends Event = Event> {
  /**
   * @param next can only using once
   * @param event an react synthetic event
   */
  (event: React.SyntheticEvent<T, E>, next: (message?: Message) => void): void
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
  const track = new Map<string, boolean>()
  const handle = (event: React.SyntheticEvent<T, E>) => {
    if (i < handlers.length) {
      const handler = handlers[i]

      handler(event, (message?: Message) => {
        if (typeof track.get(`event-${i}`) === 'undefined') {
          if (message && message[0] === 'info') {
            console.info(message[1])
          }
          if (message && message[0] === 'log') {
            console.log(message[1])
          }
          if (message && message[0] === 'warn') {
            console.warn(message[1])
          }
          if (message && message[0] === 'error') {
            console.error(message[1])
          }
          i++
          handle?.(event)
          track.set(`event-${i}`, true)
          return
        }
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
  return (event: React.SyntheticEvent<T, E>, _next: (message?: Message) => void) => {
    item?.(event)
  }
}
