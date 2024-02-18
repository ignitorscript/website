import React from 'react'

export type CreateReactContext<T extends object> = [
  {
    Context: React.Context<T | null>
    Consumer: React.Consumer<T | null>
    Provider: React.FC<React.PropsWithChildren<T | null>>
  },
  () => T | null,
]

export function createReactContext<T extends object>(name: string): CreateReactContext<T> {
  const ReactContext = React.createContext<T | null>(null)

  ReactContext.displayName = name

  const ReactContextConsumer = ReactContext.Consumer

  const ReactContextProvider: React.FC<React.PropsWithChildren<T & {}>> = ({
    children,
    ...props
  }) => {
    const value = React.useMemo(() => props as T, [props])

    return <ReactContext.Provider value={value}>{children}</ReactContext.Provider>
  }

  const useReactContext = () => {
    const context = React.useContext(ReactContext)

    return context
  }

  return [
    { Context: ReactContext, Consumer: ReactContextConsumer, Provider: ReactContextProvider },
    useReactContext,
  ]
}
