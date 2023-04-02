import React from 'react'
import Link from './Link.jsx'

const Sidebar = () =>
  <>
    <h4>One Louder</h4>
    <ul className="menu">
      <li><Link to="/" end text="Home"/></li>
      <li><Link to="getting-started" text="Getting Started"/></li>
      <li><Link to="themed-components" text="Themed Components"/></li>
      <li><Link to="defining-themes" text="Defining Themes"/></li>
    </ul>
  </>


export default Sidebar