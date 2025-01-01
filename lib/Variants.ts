import { fail, isString } from '@abw/badger-utils'
import { PropsObject } from './types'

export const variants = (variants={}) =>
  (props: PropsObject = { }) => Object.entries(variants).reduce(
    (props, [key, options]) => {
      // look for a property matching the theme key, e.g 'variant',
      // 'action', 'type', etc.
      const value = props[key]
      if (! value || ! (isString(value) || value === true)) {
        return props
      }
      const values = value === true
        ? options as PropsObject
        : (options as PropsObject)[value as string]
          || fail(`Invalid variants value for ${key}: ${value}`)
      const newValues: PropsObject = { ...values, ...props }
      delete newValues[key]
      return newValues
    },
    props
  )
