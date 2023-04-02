import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'

const Layout = () =>
  <div id="layout">
    <aside>
      <Sidebar/>
    </aside>
    <main>
      <Outlet/>
    </main>
  </div>

export default Layout