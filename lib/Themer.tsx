import { createContext, forwardRef, isValidElement } from 'react'
import { isArray, isFunction, isObject } from '@abw/badger-utils'
import {
  SomeProps, Themeable, ThemeSpecFunction, ThemeSpecItem, ThemeSpecPair
} from './types'

// export const Themer = <T extends Record<string, unknown>>() => {
export const Themer = <T extends SomeProps<T>>() => {
  const Context = createContext<T>({ } as T)

  const Provider = ({
    children,
    ...context
  }: React.PropsWithChildren<Themeable<T>>) =>
    <Context.Provider value={context as T}>
      {children}
    </Context.Provider>

  // const Themed = <Props extends Record<string, unknown>>(
  const Themed = <Props extends SomeProps<Props>>(
    Component: React.ComponentType<Props>,
    name: string = Component.displayName || Component.name
  ) => forwardRef<unknown, Props>(
    (props, ref) =>
      <Context.Consumer>
        {
          (context: Themeable<T>) => {
            let Implementation = Component
            const item = context[name as keyof T]
            let spec: ThemeSpecItem<T, Props>
            if (! item) {
              return (
                <Component
                  ref={ref}
                  {...props as Props}
                />
              )
            }
            if (isArray(item)) {
              Implementation = (item as ThemeSpecPair<T, Props>)[0]
              // spec = (spec as ThemeSpecPair<T, T[string]>)[1]
              spec = (item as ThemeSpecPair<T, Props>)[1]
            }
            else {
              spec = item as ThemeSpecItem<T, Props>
            }
            if (isFunction(spec)) {
              // If it's a function then we call it with the original props,
              // any ref that needs to be forwarded and the context.  It can
              // return a React element or an object of replacement properties.
              const result = (spec as ThemeSpecFunction<T, Props>)(
                props, ref, context
              )
              if (isValidElement(result)) {
                return result
              }
              else if (isObject(result)) {
                // NOTE: change from v1 - if there's a function it is now
                // assumed that the function will return ALL props that it
                // wants passed to the component
                return (
                  <Implementation
                    ref={ref}
                    {...result as Props}
                  />
                )
              }
            }

            if (isObject(spec)) {
              // If it's an object then these become the new *defaults* for the
              // component.  They can still be overridden by explicit properties
              return (
                <Implementation
                  ref={ref}
                  {...spec as unknown as Props}
                  {...props}
                />
              )
            }

            return (
              <Implementation
                ref={ref}
                {...props as Props}
              />
            )
          }
        }
      </Context.Consumer>
  )

  return { Context, Provider, Themed }
}

export const Theme  = Themer()
export const Themed = Theme.Themed

export default Themer

