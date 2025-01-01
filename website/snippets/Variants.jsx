import { Theme, variants } from '../../lib/index'
import Amplifier from './NamedAmplifier.jsx'

{/* START */}
import React from 'react'
// PRETEND: import Amplifier from './NamedAmplifier.jsx'
// PRETEND: import { Theme, variants } from '@abw/react-one-louder'

const MyTheme = {
  Amplifier: variants({
    musician: {
      nigel: {
        volume: 11,
        name: 'Nigel',
        instrument: 'guitar'
      },
      david: {
        volume: 9,
        name: 'David',
        instrument: 'guitar'
      },
      derek: {
        volume: 8,
        name: 'Derek',
        instrument: 'bass'
      }
    }
  })
}

const OnStage = () =>
  <Theme.Provider {...MyTheme}>
    <Amplifier musician="nigel"/>
    <Amplifier musician="david"/>
    <Amplifier musician="derek"/>
    <Amplifier musician="derek" volume="11"/>
  </Theme.Provider>

export default OnStage