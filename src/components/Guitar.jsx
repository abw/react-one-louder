import React from 'react'
import { Themed } from '../../lib/Themer.jsx'

const Guitar = ({ volume=10 }) =>
  <div>Guitar volume is {volume}</div>

export default Themed(Guitar, 'Guitar')
