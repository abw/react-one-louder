import { Theme } from '../../lib/index'
import Amplifier from './ThemedAmplifier.jsx'

{/* START */}
import React from 'react'
// PRETEND: import Amplifier from './Amplifier.jsx'
// PRETEND: import { Theme } from '@abw/react-one-louder'

const MyTheme = {
  Amplifier: props => ({
    ...props,
    volume: props.quiet ? 5 : 11
  })
}

const MyMusicApp = () =>
  <Theme.Provider {...MyTheme}>
    <Amplifier/>
    <Amplifier quiet/>
    <Amplifier quiet volume={6}/> {/* no effect */}
  </Theme.Provider>

export default MyMusicApp