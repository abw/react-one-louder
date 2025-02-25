// The type T is an object where the keys are component names that can be
// themes and the values, T[K] have the type ThemeSpec<T, T[K]> which can be
// any of:
//  * an object with default values, e.g. { volume: 11 }
//  * a function which returns default values, e.g. props => ({ volume: 11 })

// This is an attempt to work around the "Argument of type 'interface' is not
// assignable to parameter of type 'interface'" problem.
// https://timdeschryver.dev/blog/argument-of-type-interface-is-not-assignable-to-parameter-of-type-interface
export type SomeProps<T> = {
  [K in keyof T]?: T[K]
}

export type Themeable<T> = {
  [K in keyof T]?: ThemeSpec<T, T[K]>
}
export type ThemeSpec<T, P> = ThemeSpecItem<T, P> | ThemeSpecPair<T, P>
export type ThemeSpecPair<T, P> = [ThemeComponent<P>, ThemeSpecItem<T, P>]
export type ThemeSpecItem<T, P> = Partial<P> | ThemeSpecFunction<T, P>
export type ThemeComponent<P> = React.ComponentType<P>
export type ThemeSpecFunction<T, P> = (
  props:    Record<string, unknown>,
  ref:      React.ForwardedRef<unknown>,
  context:  Themeable<T>
) => Partial<P> | React.ReactElement


