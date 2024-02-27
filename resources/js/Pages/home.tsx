import { useState } from 'react'
import { unsafe_createComposedEventHandler } from '../Utilities/createComposedEventHandler'

export default function Index() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>Count: {count}</div>
      <button
        onClick={unsafe_createComposedEventHandler(() => {
          setCount(count + 1)
        })}
      >
        INCREMENT
      </button>
      <button
        onClick={unsafe_createComposedEventHandler(() => {
          setCount(count - 1)
        })}
      >
        DECREMENT
      </button>
    </div>
  )
}
