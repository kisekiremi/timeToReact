import React, { lazy, Suspense } from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'

import Loading from '../components/Loading'
import Home from '../views/home'
const Act = lazy(() => import('../views/act'))
const STalk = lazy(() => import('../views/smalltalk'))
const Haru = lazy(() => import('../views/haru'))
const ArtGallery = lazy(() => import('../views/ArtGallery'))

const routes: RouteObject[] = [
  { path: '/', id: '首页', element: <Home /> },
  {
    path: '/act',
    id: '演奏会-22娘33娘',
    element: (
      <Suspense fallback={<Loading />}>
        <Act />
      </Suspense>
    )
  },
  {
    path: '/smalltalk',
    id: '地图',
    element: (
      <Suspense fallback={<Loading />}>
        <STalk />
      </Suspense>
    )
  },
  {
    path: '/haru',
    id: '春风',
    element: (
      <Suspense fallback={<Loading />}>
        <Haru />
      </Suspense>
    )
  },
  {
    path: '/artGallery',
    id: '画廊',
    element: (
      <Suspense fallback={<Loading />}>
        <ArtGallery></ArtGallery>
      </Suspense>
    )
  }
]

function Routers() {
  return useRoutes(routes)
}

const R = { routes, Routers }

export default R
