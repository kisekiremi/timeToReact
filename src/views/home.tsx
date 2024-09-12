import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/views/home.scss'

export default function () {
  const UseNavigate = useNavigate()

  return (
    <div className="Home flex-c flex-col bg-red-400 w-full min-h-full">
      <div>This is home content</div>

      <b className="cursor-pointer" onClick={() => UseNavigate('/Act')}>
        click to 穿梭
      </b>
    </div>
  )
}
