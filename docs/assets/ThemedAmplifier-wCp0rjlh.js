const e=`import { Themed } from '../../lib/index'

{/* START */}
import React from 'react'
// PRETEND: import { Themed } from '@abw/react-one-louder'

const Amplifier = ({ volume=10 }) =>
  <div>Amplifier volume is {volume}</div>

export default Themed(Amplifier, 'Amplifier')`;export{e as default};
