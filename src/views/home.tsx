import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/views/home.scss'

import { readVisitTime, writeVisitTime } from '../api/visit'

export default function () {
  const UseNavigate = useNavigate()

  // const [visitTime, setVisitTime] = useState(0)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data: any = await readVisitTime()
  //     if (data.code === 0) {
  //       console.log('xxx', data)
  //       setVisitTime(data.value)
  //       await writeVisitTime()
  //     }
  //   }
  //   fetchData()
  // }, [])

  return (
    <div className="Home flex-c flex-col bg-red-400 w-full min-h-full">
      <div>This is home content</div>

      <b className="cursor-pointer" onClick={() => UseNavigate('/Act')}>
        click to 穿梭
      </b>

      {/* 
      <div className="absolute left-1/2  -translate-x-1/2 text-white" style={{ top: '120px' }}>
        visit_time: {visitTime}
      </div> */}
    </div>
  )
}
