export const makeName = (key: string, id: string, root?: string) => {
  return root ? [root, key, id].join('-') : [key, id].join('-')
}
