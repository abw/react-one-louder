import React from 'react'
import Link from '../site/Link.jsx'
import { imgUrl } from '../site/Utils.jsx'
import { ReactComponent as Github } from '../svg/github.svg'
import { ReactComponent as Logo } from '../svg/one-louder.svg'

const Home = () =>
  <div className="home">
    <div className="body">
      <h1>@abw/react-one-louder</h1>
      <a href="https://github.com/abw/react-one-louder" className="github">
        <Github/>
      </a>
      <div className="pic-side">
        <div className="logo">
          <Logo/>
        </div>
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
            <Link to="getting-started" text="Getting Started"/> - adding the module
            to your project.
          </li>
          <li>
            <Link to="themed-components" text="Themed Components"/> - writing and
            using themed components.
          </li>
          <li>
            <Link to="defining-themes" text="Defining Themes"/> - different ways
            to define themes.
          </li>
          <li>
            <Link to="component-substitution" text="Component Substitution"/> - swapping one
            component out for another.
          </li>
        </ul>
      </div>
    </div>
    <div className="badger">
      <img src={imgUrl('badger.svg')} alt="badger"/>
      <div className="caption">
        Built by Badgers
      </div>
    </div>
  </div>

export default Home

