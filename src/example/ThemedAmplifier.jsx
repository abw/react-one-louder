import React from 'react'
import { Themed } from '../../lib/index.jsx'

{/* START */}
// PRETEND: import { Themed } from '@abw/react-one-louder'

const Amplifier = ({ volume=10, color='black' }) =>
  <div>Amplifier volume is {volume}, color is {color}</div>

export default Themed(Amplifier, 'Amplifier')
