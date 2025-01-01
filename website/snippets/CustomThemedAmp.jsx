import Amplifier from './ThemedAmplifier.jsx'
import { Theme } from '../../lib/index'

{/* START */}
import React from 'react'
// PRETEND: import Amplifier from './Amplifier.jsx'
// PRETEND: import { Theme } from '@abw/react-one-louder'

const MyTheme = {
  Amplifier: {
    volume: 11
  }
}

const Festival = () =>
  <Theme.Provider {...MyTheme}>
    <Amplifier/>
    <Amplifier volume={9}/>
  </Theme.Provider>

export default Festival