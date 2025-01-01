import React from 'react'
import { isArray, isFunction, isObject } from '@abw/badger-utils'
import {
  ContextPropsObject, RenderProps, RenderSpecFunction,
  RenderSpecInputFunction, RenderSpecInputOrPair, RenderSpecPair,
} from './types'

export function Render({
  context={},
  Implementation,
  spec=null,
  props={},
  ref
}: RenderProps): React.ReactElement {
  if (! spec) {
    return <Implementation {...props} ref={ref}/>
  }
  const mergedProps: ContextPropsObject = { }

  // If the spec is a function then we call it with the context,
  // otherwise we assume it's the name of an entry in theme context
  let input: RenderSpecInputOrPair = isFunction(spec)
    ? (spec as RenderSpecInputFunction)(context)
    : context[spec as string]

  // if we've got an array then the first argument is a new Implementation
  // component and the second is the set of default props or function
  if (isArray(input)) {
    Implementation = (input as RenderSpecPair)[0]
    input = (input as RenderSpecPair)[1]
  }

  if (isFunction(input)) {
    // If it's a function then we call it with the original props, any ref
    // that needs to be forwarded and the context.  It can returned a React
    // element or an object of replacement/additional properties.
    const result = (input as RenderSpecFunction)(props, ref, context)
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

