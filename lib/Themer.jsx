/* eslint-disable react/display-name */
import React from 'react'
import Context from './Context.jsx'
import Render from './Render.jsx'

export const Themer = (options) => {
  // The Provider is the wrapper that goes somewhere near the top
  // level of your app, along with custom configuration properties
  const Provider = ({children, ...props}) =>
    <Context.Provider value={{ ...options, ...props }}>
      {children}
    </Context.Provider>

  // The Consumer is a HOC which wraps another component constructor and
  // mixes configuration properties into the properties passed to it.
  const Consumer = Component => props =>
    <Context.Consumer>
      {context => <Component {...context} {...props} context={context}/>}
    </Context.Consumer>

  // The Component is used to wrap the implementation of a component and has
  // a second argument identifying which kind of component it is, e.g.
  // "Amplifier" to use the custom property configuration for an Amplifier
  const Component = (
    Implementation,
    spec=Implementation.displayName||Implementation.name
  ) => React.forwardRef(
    (props, ref) =>
      <Context.Consumer>
        { context =>
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

export default Theme
