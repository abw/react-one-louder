import React from 'react'
import { Themed } from '../../lib/index.jsx'

const Amplifier = ({ id=1, volume=10 }) =>
  <div>Amplifier #{id} volume is {volume}</div>

export default Themed(Amplifier, 'Amplifier')
