import React from 'react'
import { NavLink } from 'react-router-dom'

const Link = ({to, end, text, children}) =>
  <NavLink to={to} end={end}>
    {text||children}
  </NavLink>

export default Link