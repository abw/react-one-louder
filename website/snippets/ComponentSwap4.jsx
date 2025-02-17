import { Theme } from '../../lib/index'
import Amplifier from './ThemedAmplifier.jsx'
import Marshall from './MarshallAmplifier.jsx'

{/* START */}
import React from 'react'
// PRETEND: import Amplifier from './Amplifier.jsx'
// PRETEND: import Marshall from './Marshall.jsx'
// PRETEND: import { Theme } from '@abw/react-one-louder'

const MyTheme = {
  Amplifier: [
    Marshall,
    props => props.quiet
      ? { volume: 5  }
      : { volume: 11 }
  ]
}

const OnStage = () =>
  <Theme.Provider {...MyTheme}>
    <Amplifier/>
    <Amplifier quiet/>
  </Theme.Provider>

export default OnStage