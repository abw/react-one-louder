import { Themed } from '../../lib/index'

{/* START */}
import React from 'react'
// PRETEND: import { Themed } from '@abw/react-one-louder'

const Amplifier = ({
  volume=10,
  name="Musician",
  instrument
}) =>
  <div>{name}'s {instrument} amplifier volume is {volume}</div>

export default Themed(Amplifier, 'Amplifier')