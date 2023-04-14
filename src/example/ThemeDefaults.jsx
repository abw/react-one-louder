import React from 'react'
import { Theme } from '../../lib/index.jsx'
import Amplifier from './ThemedAmplifier.jsx'

{/* START */}
// PRETEND: import { Theme } from '@abw/react-one-louder'

const MyTheme = {
  Amplifier: props => props.quiet
    ? { volume: props.volume ?? 5  }
    : { volume: props.volume ?? 11 }
}

const YourApplication = () =>
  <Theme.Provider {...MyTheme}>
    <Amplifier/>
    <Amplifier quiet/>
    <Amplifier quiet volume={6}/>
  </Theme.Provider>
{/* END */}
export default YourApplication