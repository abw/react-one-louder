import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import ScrollToTop from './ScrollToTop.jsx'

const Layout = () =>
  <div id="layout">
    <ScrollToTop/>
    <aside>
      <Sidebar/>
    </aside>
    <main id="content">
      <Outlet/>
    </main>
  </div>

export default Layout