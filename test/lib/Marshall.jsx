import React from 'react'
import { Themed } from '../../lib/index.jsx'

const Marshall = ({ id=1, volume=10 }) =>
  <div>Marshall amplifier #{id} volume is {volume}</div>

export default Themed(Marshall, 'Marshall')
