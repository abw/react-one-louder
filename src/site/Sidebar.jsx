import React from 'react'
import Link from './Link.jsx'
import { date, version } from './Utils.jsx'
import { ReactComponent as Abw } from '../svg/abw.svg'

const Sidebar = () =>
  <>
    <div className="menu">
      <h4>One Louder</h4>
      <ul className="menu">
        <li><Link to="/" end text="Home"/></li>
        <li><Link to="getting-started" text="Getting Started"/></li>
        <li><Link to="themed-components" text="Themed Components"/></li>
        <li><Link to="defining-themes" text="Defining Themes"/></li>
        <li><Link to="component-substitution" text="Component Substitution"/></li>
      </ul>
    </div>
    <footer>
      <div className="notes">
        <div>
          Version {version}
        </div>
        <a href="https://github.com/abw">
          <Abw/>
        </a>
        <div>
          {date}
        </div>
      </div>
    </footer> </>


export default Sidebar