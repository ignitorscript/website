import React, { useDebugValue } from 'react'
export type Initialize<K, V> = [K, V][]
export type InitialValue<K, V> = Initialize<K, V> | null | undefined

export type HookMapImplement<K, V> = HookMap<K, V>

class HookMap<K, V> {
  constructor(
    public state: Initialize<K, V>,
    public setState: React.Dispatch<React.SetStateAction<Initialize<K, V>>>
  ) {}

  status() {
    return this.state
  }

  clear(): void {
    const tmp = new Map(this.state)

    tmp.clear()

    return this.setState([...tmp])
  }

  delete(key: K): boolean {
    const tmp = new Map(this.state)

    const isDeleted = tmp.delete(key)

    this.setState([...tmp])

    return isDeleted
  }

  forEach(
    callbackfn: (value: V, key: K, map: Map<K, V>, core: Initialize<K, V>) => void,
    thisArg?: any
  ): void {
    const tmp = new Map(this.state)

    tmp.forEach(($value: V, $key: K, $map: Map<K, V>) => {
      callbackfn($value, $key, $map, this.state)
    }, thisArg)
  }

  get(key: K, fallback?: V): V {
    const tmp = new Map(this.state)

    const item = tmp.get(key)

    if (typeof fallback !== 'undefined' && typeof item === 'undefined') {
      return fallback
    }

    return item as V
  }

  has(key: K): boolean {
    const tmp = new Map(this.state)

    return tmp.has(key)
  }

  set(key: K, value: V): void {
    const tmp = new Map(this.state)

    tmp.set(key, value)

    return this.setState([...tmp])
  }

  get size(): number {
    const tmp = new Map(this.state)

    return tmp.size
  }

  entries(): IterableIterator<[K, V]> {
    const tmp = new Map(this.state)

    return tmp.entries()
  }

  keys(): IterableIterator<K> {
    const tmp = new Map(this.state)

    return tmp.keys()
  }

  values(): IterableIterator<V> {
    const tmp = new Map(this.state)

    return tmp.values()
  }

  get [Symbol.iterator](): IterableIterator<[K, V]> {
    return this.entries()
  }

  get [Symbol.toStringTag](): string {
    return 'useMap'
  }
}

export function useMap<K, V>(InitialValue?: InitialValue<K, V>) {
  const [state, setState] = React.useState(() => {
    const tmp = new Map(InitialValue)

    return [...tmp]
  })

  useDebugValue(state, (value) => {
    return new Map(value)
  })

  const map = React.useMemo(() => new HookMap(state, setState), [state])

  return map
}
