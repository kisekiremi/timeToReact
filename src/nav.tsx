import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NavCom() {
  const headerCLicks = [
    { route: '/', name: '主舞台', id: (Math.random() * 199.99).toFixed(2) },
    { route: '/act', name: '穿梭', id: (Math.random() * 199.99).toFixed(2) },
    { route: '/smalltalk', name: '茗语', id: (Math.random() * 199.99).toFixed(2) },
    { route: '/haru', name: '春熙', id: (Math.random() * 199.99).toFixed(2) }
  ]
  const UseNavigate = useNavigate()

  return (
    <>
      <nav className="header">
        <ol className="h-full grid grid-cols-4 items-center justify-items-center">
          {headerCLicks.map(({ id, route, name }) => {
            return (
              <li key={id} className="transition cursor-pointer" onClick={() => UseNavigate(route)}>
                <a className="w-full h-full flex items-center justify-center">{name}</a>
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
