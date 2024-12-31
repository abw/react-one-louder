import { createContext } from 'react'
import { ContextPropsObject } from './types'

const Context = createContext<ContextPropsObject>({ })

export default Context
