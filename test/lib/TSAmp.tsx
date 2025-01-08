import React from 'react'
import { Themed } from '../../lib/index'

type AmplifierProps = {
  volume?: number
}

const Amplifier = ({ volume=10 }: AmplifierProps) =>
  <div>Amplifier volume is {volume}</div>

const ThemedAmplifier = Themed(Amplifier, 'Amplifier')

const Wrapper = () =>
  <>
    <Amplifier/>
    <Amplifier volume={11}/>
    <ThemedAmplifier/>
    <ThemedAmplifier volume={11}/>
  </>

export default Wrapper
