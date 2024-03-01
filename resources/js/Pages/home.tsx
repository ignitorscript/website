import { useState } from 'react'
import { createComposedEventHandler } from 'ignitor.create-composed-event-handler'
export default function Index() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>Count: {count}</div>
      <button
        onClick={createComposedEventHandler(
          (_, next) => {
            setCount(count + 1)

            next()
          },
          () => {
            console.log('other function')
          }
        )}
      >
        INCREMENT
      </button>
      <button
        onClick={createComposedEventHandler(
          (_, next) => {
            setCount(count - 1)

            next()
          },
          () => {
            console.log('other function')
          }
        )}
      >
        DECREMENT
      </button>
    </div>
  )
}
