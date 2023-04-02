import React from 'react'
import Amplifier from './ThemedAmplifier.jsx'
import { Theme } from '../../lib/index.jsx'

{/* START */}
// PRETEND: import Amplifier from './Amplifier.jsx'
// PRETEND: import { Theme } from '@abw/react-one-louder'

const MyTheme = {
  Amplifier: {
    volume: 11
  }
}

const AmplifierExample = () =>
  <Theme.Provider {...MyTheme}>
    <Amplifier/>
    <Amplifier volume={9}/>
  </Theme.Provider>
{/* END */}
export default AmplifierExample