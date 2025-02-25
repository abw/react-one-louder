import { Themed } from '../../lib/index'

const Amplifier = ({ id=1, volume=10 }) =>
  <div>Amplifier #{id} volume is {volume}</div>

const ThemedAmplifier = Themed(Amplifier, 'Amplifier')

export default ThemedAmplifier
