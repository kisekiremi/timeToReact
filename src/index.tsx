import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import Nav from './nav'
import Routers from './router'

import './style/tailwind.css'
import './style/base.scss'

const Root = createRoot(document.getElementById('root') as HTMLElement)

Root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routers />
    </BrowserRouter>
  </React.StrictMode>
)
