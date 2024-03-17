export const makeName = (key: string, id: string, root?: string) => {
  return root ? [root, key, id].join('-') : [key, id].join('-')
}

export const injectStyle = (
  style: Record<`--${string}`, PropertyKey> & React.CSSProperties = {}
) => {
  return style as React.CSSProperties
}
