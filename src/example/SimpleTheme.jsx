import React from 'react'
import { Theme } from '../../lib/index.jsx'

{/* START */}
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

const YourApplication = () =>
  <Theme.Provider {...MyTheme}>
    {/* ...your site code... */}
  </Theme.Provider>
{/* END */}
export default YourApplication