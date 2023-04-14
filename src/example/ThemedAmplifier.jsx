import React from 'react'
import { Themed } from '../../lib/index.jsx'

{/* START */}
// PRETEND: import { Themed } from '@abw/react-one-louder'

const Amplifier = ({ volume=10 }) =>
  <div>Amplifier volume is {volume}</div>

export default Themed(Amplifier, 'Amplifier')
