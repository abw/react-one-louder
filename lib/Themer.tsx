import React from 'react'
import Context from './Context'
import Render from './Render'
import { PropsObject, RenderComponent, ThemeContext, ThemedType } from './types'

const Themer = (options: ThemeContext = { }): ThemedType => {
  // The Provider is the wrapper that goes somewhere near the top
  // level of your app, along with custom configuration properties
  const Provider = ({ children, ...props }: { children: React.ReactNode }) =>
    <Context.Provider value={{ ...options, ...props }}>
      {children}
    </Context.Provider>

  // The Consumer is a HOC which wraps another component constructor and
  // mixes configuration properties into the properties passed to it.
  const Consumer = (Component: RenderComponent) => (props: PropsObject) =>
    <Context.Consumer>
      { (context: PropsObject = {} ) => <Component {...context} {...props} context={context}/> }
    </Context.Consumer>

  // The Component is used to wrap the implementation of a component and has
  // a second argument identifying which kind of component it is, e.g.
  // "Amplifier" to use the custom property configuration for an Amplifier
  const Component = (
    Implementation: RenderComponent,
    spec=Implementation.displayName||Implementation.name
  ) => React.forwardRef(
    (props, ref) =>
      <Context.Consumer>
        { (context: ThemeContext) =>
          <Render
            Implementation={Implementation}
            context={context}
            spec={spec}
            props={props}
            ref={ref}
          />
        }
      </Context.Consumer>
  )

  return { Context, Provider, Consumer, Component }
}

export const Theme  = Themer()
export const Themed = Theme.Component

// export default Theme
