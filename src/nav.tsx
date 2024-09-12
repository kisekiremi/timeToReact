import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import R from './router'

function NavCom() {
  const headerCLicks = R.routes
  const UseNavigate = useNavigate()
  const UseLocation = useLocation()

  useEffect(() => {
    console.log(UseLocation)
  }, [UseLocation])

  return (
    <>
      <nav className="header">
        <ol className="h-full grid grid-cols-5 items-center justify-items-center">
          {headerCLicks.map(({ id, path }) => {
            return (
              <li
                className={`transition cursor-pointer${UseLocation.pathname === path ? ' active' : ''}`}
                key={id}
                onClick={() => UseNavigate(String(path))}
              >
                <a className="w-full h-full flex items-center justify-center">{id}</a>
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}

export default NavCom
