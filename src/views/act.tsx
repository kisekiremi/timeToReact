import React from 'react'
import '../style/modules/act.scss'

import Act3322 from '../components/Act3322'
import ActDetail from './actDetail'

export default function () {
  return (
    <div className="act text-center">
      <div className="sidebar pt-5">
        <h1>React Router _</h1>
      </div>
      <div className="detail w-full my-5">
        <ActDetail />
      </div>

      <Act3322 />
    </div>
  )
}
