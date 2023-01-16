import React from 'react'
import '../style/modules/home.scss'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const UseNavigate = useNavigate()

  return (
    <div className="Home flex-c flex-col">
      <div>This is home content</div>

      <b className="cursor-pointer" onClick={() => UseNavigate('/Act')}>
        click to 穿梭
      </b>
    </div>
  )
}
