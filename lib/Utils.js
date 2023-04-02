export function isFunction(value) {
  return typeof value === 'function'
}

export function isObject(value) {
  return typeof value === 'object'
    && ! isArray(value)
    && ! isNull(value)
}

export function isArray(value) {
  return Array.isArray(value)
}

export function isNull(value) {
  return value === null
}
