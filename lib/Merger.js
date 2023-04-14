import { isFunction, isObject } from './Utils.js'

// Function to merge any properties from a context section identified by the
// spec name (i.e. context[spec]) into the runtime properties in props
export function merger(context={}, spec=false, props={}) {
  if (! spec) {
    return props
  }
  let result = { }

  // If the spec is a function then we call it with the context,
  // otherwise we assume it's the name of an entry in theme context
  const input = isFunction(spec)
    ? spec(context)
    : context[spec]

  // The value in the context, or value returned by the function, can be an
  // object of default properties to add to the properties, a function which
  // can return a set of properties to be merged in, or a single value which
  // is added to the properties
  if (isObject(input)) {
    Object.assign(result, input, props)
  }
  else if (isFunction(input)) {
    Object.assign(result, props, input(props, context))
  }
  else {
    //result[spec] = input
    Object.assign(result, props)
  }

  return result
}

export default merger

