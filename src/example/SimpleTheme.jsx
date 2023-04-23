import { Theme } from '../../lib/index.jsx'

{/* START */}
import React from 'react'
// PRETEND: import { Theme } from '@abw/react-one-louder'

const MyTheme = {
  Guitar: {
    volume: 11,
  },
  Amplifier: {
    volume: 11
  },
  Drummer: {
    lifeInsurance: true,
    fireExtinguisher: true,
    gardeningAccident: false,
  }
}

const OnStage = () =>
  <Theme.Provider {...MyTheme}>
    {/* ...your site code... */}
  </Theme.Provider>

export default OnStage