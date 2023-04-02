import React from 'react'
import Guitar from './components/Guitar.jsx'
import Amplifier from './components/Amplifier.jsx'
import badgerLogo from '/badger.svg'
import { Theme } from '../lib/index.jsx'

const theme = {
  Guitar: { volume: 11 },
  Amplifier: { volume: 11 }
}

function App() {
  return (
    <div className="app">
      <img src={badgerLogo} className="logo" alt="Badger logo" />
      <h1>@abw/react-one-louder</h1>

      <section>
        <h1>Default Values</h1>
        <Guitar/>
        <Amplifier/>
      </section>

      <section>
        <h1>Custom Values</h1>
        <Guitar volume={9}/>
        <Amplifier volume={9}/>
      </section>

      <section>
        <h1>Themed Values</h1>
        <Theme.Provider {...theme}>
          <Guitar/>
          <Amplifier/>
          <Guitar volume={9}/>
          <Amplifier volume={9}/>
        </Theme.Provider>
      </section>
    </div>
  )
}

export default App
