import React, { lazy, Suspense } from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'

import Loading from '../components/Loading'
import Home from '../views/home'
const Act = lazy(() => import('../views/act'))
const STalk = lazy(() => import('../views/smalltalk'))
const Haru = lazy(() => import('../views/haru'))

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  {
    path: '/act',
    element: (
      <Suspense fallback={<Loading />}>
        <Act />
      </Suspense>
    )
  },
  {
    path: '/smalltalk',
    element: (
      <Suspense>
        <STalk />
      </Suspense>
    )
  },
  {
    path: '/haru',
    element: (
      <Suspense>
        <Haru />
      </Suspense>
    )
  }
]

function Routers() {
  return useRoutes(routes)
}

export default Routers
