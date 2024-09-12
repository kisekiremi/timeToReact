import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import Nav from './nav'
import Routers from './router/index'

import './style/tailwind.css'
import './style/base.scss'

const Root = createRoot(document.getElementById('root') as HTMLElement)
/* React18 在开发环境中除了必要的挂载之外，还 "额外"模拟执行了一次组件的卸载和挂载。*/
/* 仅在处于strict模式 + dev模式下，副作用会执行两次，以模拟卸载组件和重新挂载组件的状态 */
/* 正常production模式下只会执行一次 */
Root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <main>
        <Routers.Routers />
      </main>
    </BrowserRouter>
  </React.StrictMode>
)
