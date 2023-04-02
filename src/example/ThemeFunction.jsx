import React from 'react'
import { Theme } from '../../lib/index.jsx'
import Amplifier from './ThemedAmplifier.jsx'

{/* START */}
// PRETEND: import { Theme } from '@abw/react-one-louder'

const MyTheme = {
  Amplifier: props => props.quiet
    ? { volume: 5,  color: 'black' }
    : { volume: 11, color: 'none more black' }
}

const YourApplication = () =>
  <Theme.Provider {...MyTheme}>
    <Amplifier/>
    <Amplifier quiet/>
    <Amplifier quiet volume={6}/>
  </Theme.Provider>
{/* END */}
export default YourApplication