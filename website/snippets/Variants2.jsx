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
        name: 'Nigel',
        instrument: 'guitar'
      },
      david: {
        name: 'David',
        instrument: 'guitar'
      },
      derek: {
        name: 'Derek',
        instrument: 'bass'
      }
    },
    intensity: {
      loud: {
        volume: 11,
      },
      loudish: {
        volume: 9,
      },
      quiet: {
        volume: 8
      }
    }
  })
}

const OnStage = () =>
  <Theme.Provider {...MyTheme}>
    <Amplifier musician="nigel" intensity="loud"/>
    <Amplifier musician="david" intensity="loudish"/>
    <Amplifier musician="derek" intensity="quiet"/>
    <Amplifier musician="derek" intensity="loud"/>
  </Theme.Provider>

export default OnStage