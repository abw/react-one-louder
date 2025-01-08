import { fail, isString } from '@abw/badger-utils'

export const variants = <T extends Record<string, unknown>>(variants={}) =>
  (props: T) => Object.entries(variants).reduce(
    (props, [key, options]) => {
      // look for a property matching the theme key, e.g 'variant',
      // 'action', 'type', etc.
      const value = props[key]
      if (! value || ! (isString(value) || value === true)) {
        return props
      }
      const values = value === true
        ? options as T
        : (options as T)[value as string]
          || fail(`Invalid variants value for ${key}: ${value}`)
      const newValues: T = { ...values, ...props }
      delete newValues[key]
      return newValues
    },
    props
  )
