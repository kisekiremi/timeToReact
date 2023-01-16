import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function () {
  const UseNavigate = useNavigate()

  return (
    <>
      <nav className="header">
        <ol className="h-full grid grid-cols-4 items-center justify-items-center">
          <li className="transition cursor-pointer" onClick={() => UseNavigate('/')}>
            <a className="w-full h-full flex items-center justify-center">主舞台</a>
          </li>
          <li className="transition cursor-pointer" onClick={() => UseNavigate('/act')}>
            <a className="w-full h-full flex items-center justify-center">穿梭</a>
          </li>
          <li className="transition cursor-pointer" onClick={() => UseNavigate('/smalltalk')}>
            <a className="w-full h-full flex items-center justify-center">茗语</a>
          </li>
          <li className="transition cursor-pointer" onClick={() => UseNavigate('/haru')}>
            <a className="w-full h-full flex items-center justify-center">春熙</a>
          </li>
        </ol>
      </nav>
    </>
  )
}
