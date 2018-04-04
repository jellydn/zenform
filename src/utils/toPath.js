// @flow
const toPath = (key: string): string[] => {
  if (key === null || key === undefined) {
    return []
  }
  if (typeof key !== 'string') {
    throw new Error('toPath() expects a string')
  }
  return key.length ? key.split(/[.[\]]+/).filter(Boolean) : []
}

export default toPath
