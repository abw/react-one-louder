import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from '../pages/Home.jsx'
import GettingStarted from '../pages/GettingStarted.jsx'
import ThemedComponents from '../pages/ThemedComponents.jsx'
import DefiningThemes from '../pages/DefiningThemes.jsx'

export const Router = createBrowserRouter([
  {
    path:     '/',
    element:  <Layout/>,
    children: [
      { path: '/',                  element: <Home/> },
      { path: 'getting-started',    element: <GettingStarted/> },
      { path: 'themed-components',  element: <ThemedComponents/> },
      { path: 'defining-themes',    element: <DefiningThemes/> },
    ]
  },
])

export default Router