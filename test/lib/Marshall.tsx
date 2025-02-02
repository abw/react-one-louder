import { Themed } from '../../lib/index.js'

const Marshall = ({ id=1, volume=10 }) =>
  <div>Marshall amplifier #{id} volume is {volume}</div>

const ThemedMarshall = Themed(Marshall, 'Marshall')

export default ThemedMarshall
