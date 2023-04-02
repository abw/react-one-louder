import React from 'react'
import { Themed } from '../../lib/Themer.jsx'

const Amplifier = ({ volume=10 }) =>
  <div>Amplifier volume is {volume}</div>

export default Themed(Amplifier, 'Amplifier')
