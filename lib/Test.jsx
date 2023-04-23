import React from 'react'
import { isFunction } from './Utils.js'

export const Foo = () =>
  <div>FOO</div>

export function Bar() {
  return <div>BAR</div>
}

export const returnFoo = () => Foo

export const returnBar = () => <Bar/>

export const Test = () => {
  console.log('Foo: ', Foo)
  console.log('Foo is function: ', isFunction(Foo) ? 'true' : 'false')
  console.log('Foo is valid: ', React.isValidElement(Foo) ? 'true' : 'false')
  console.log('Bar: ', Bar)
  console.log('Bar is function: ', isFunction(Bar) ? 'true' : 'false')
  console.log('Bar is valid: ', React.isValidElement(Bar) ? 'true' : 'false')
  const foo = returnFoo()
  console.log('foo: ', foo)
  console.log('returnFoo returns function: ', isFunction(foo) ? 'true' : 'false')
  console.log('returnFoo is valid: ', React.isValidElement(returnFoo) ? 'true' : 'false')
  console.log('foo is valid: ', React.isValidElement(foo) ? 'true' : 'false')
  const bar = returnBar()
  console.log('bar: ', bar)
  console.log('returnBar returns function: ', isFunction(bar) ? 'true' : 'false')
  console.log('returnBar is valid: ', React.isValidElement(returnBar) ? 'true' : 'false')
  console.log('bar is valid: ', React.isValidElement(bar) ? 'true' : 'false')
  return <>
    <Foo/>
    <Bar/>
    {foo()}
    {bar}
  </>
}