import { fail, isString } from '@abw/badger-utils'
import { SomeProps } from './types'

// export const variants = <T extends Record<string, unknown>>(variants={}) =>
export const variants = <T extends SomeProps<T>>(variants={}) =>
  (props: T) => Object.entries(variants).reduce(
    (props, [key, options]) => {
      // look for a property matching the theme key, e.g 'variant',
      // 'action', 'type', etc.
      // const value = props[key]
      const value = props[key as keyof T]
      if (! value || ! (isString(value) || value === true)) {
        return props
      }
      const values = value === true
        ? options as T
        // : (options as T)[value as string]
        : (options as T)[value as keyof T]
          || fail(`Invalid variants value for ${key}: ${value}`)
      const newValues: T = { ...values, ...props }
      delete newValues[key as keyof T]
      return newValues
    },
    props
  )
