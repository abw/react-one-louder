import React from 'react'

const Home = () =>
  <div className="home">
    <h1>@abw/react-one-louder</h1>
    <div className="pic-side">
      <img src="/one-louder.svg"/>
      <div className="blurb">
        <p className="intro">
          <code className="code">react-one-louder</code> is a simple React
          library for customising components.  It is typically used for
          theming UI components, but more generally it can be used to provide
          sensible &quot;global&quot; defaults for any components in a web
          site or other application.
        </p>
        <p>
          If you can see... the numbers all go to eleven. Look... right
          across the board. Eleven... eleven... eleven. You see, most blokes
          will be playing at ten. You&apos;re on ten here... all the way up,
          all the way up. You&apos;re on ten on your guitar... where can you
          go from there? Where? Nowhere. Exactly. What we do is if we need
          that extra push over the cliff, you know what we do? Put it up to
          eleven. Eleven. Exactly. One louder.
        </p>
      </div>
    </div>
    <div>
      <ul className="large menu">
        <li>
          <a href="getting-started">Getting Started</a> - adding the module
          to your project.
        </li>
        <li>
          <a href="themed-components">Themed Components</a> - writing and
          using themed components.
        </li>
      </ul>
    </div>
    <div className="badger">
      <img src="/badger.svg" alt="badger"/>
      <div className="caption">
        Built by Badgers
      </div>
    </div>
  </div>

export default Home

