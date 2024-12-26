import { Theme } from '../../lib/index'
import Amplifier from './ThemedAmplifier.jsx'

{/* START */}
import React from 'react'
// PRETEND: import Amplifier from './Amplifier.jsx'
// PRETEND: import { Theme } from '@abw/react-one-louder'

const MyTheme = {
  Amplifier: props => props.quiet
    ? { volume: 5  }
    : { volume: 11 }
}

const OnStage = () =>
  <Theme.Provider {...MyTheme}>
    <Amplifier/>
    <Amplifier quiet/>
    <Amplifier quiet volume={6}/>
  </Theme.Provider>

export default OnStage