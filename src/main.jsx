import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './site/Router.jsx'
import { RouterProvider, } from 'react-router-dom'
// import App from './App'
import '../styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
    {/* <App /> */}
  </React.StrictMode>,
)
