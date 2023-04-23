import React from 'react'
import { isArray, isFunction, isObject } from './Utils.js'

export function Render({
  context={},
  Implementation,
  spec=false,
  props={},
  ref
}) {
  if (! spec) {
    return <Implementation {...props} ref={ref}/>
  }
  let mergedProps = { }

  // If the spec is a function then we call it with the context,
  // otherwise we assume it's the name of an entry in theme context
  let input = isFunction(spec)
    ? spec(context)
    : context[spec]

  // if we've got an array then the first argument is a new Implementation
  // component and the second is the set of default props or function
  if (isArray(input)) {
    Implementation = input[0]
    input = input[1]
  }

  if (isFunction(input)) {
    // If it's a function then we call it with the original props, any ref
    // that needs to be forwarded and the context.  It can returned a React
    // element or an object of replacement/additional properties.
    const result = input(props, ref, context)
    if (React.isValidElement(result)) {
      return result
    }
    else if (isObject(result)) {
      Object.assign(mergedProps, props, result)
    }
  }
  else if (isObject(input)) {
    // If it's an object then these become the new *defaults* for the
    // component.  They can still be overridden by explicit properties
    Object.assign(mergedProps, input, props)
  }
  else {
    // Otherwise we just use the provided props
    Object.assign(mergedProps, props)
  }

  // render the element
  return <Implementation {...mergedProps} ref={ref}/>
}

export default Render

