import React from 'react'
import { Theme } from '../../lib/index.jsx'
import Amplifier from './ThemedAmplifier.jsx'

{/* START */}
// PRETEND: import { Theme } from '@abw/react-one-louder'

const MyTheme = {
  Amplifier: props => props.quiet
    ? { volume: 5,  color: props.color ?? 'black' }
    : { volume: 11, color: props.color ?? 'none more black' }
}

const YourApplication = () =>
  <Theme.Provider {...MyTheme}>
    <Amplifier/>
    <Amplifier quiet/>
    <Amplifier quiet volume={6} color='green'/>
  </Theme.Provider>
{/* END */}
export default YourApplication