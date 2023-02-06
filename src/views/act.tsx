import React from 'react'
import '../style/modules/act.scss'

import Act3322 from '../components/Act3322'
import ActDetail from './actDetail'

export default function () {
  return (
    <div className="act text-center">
      <div className="flex-c h-20">
        <a href="https://docs.qq.com/sheet/DRmFSSVFoR1R3bFFU?tab=BB08J2" target="_blank" rel="noopener noreferrer">
          <b className="text-lg text-red-600 underline decoration-double">Jump to workingTime</b>
        </a>
      </div>
      <div className="detail w-full my-5">
        <hr className="h-0.5  w-full  bg-red-500" />
        <ActDetail />
      </div>
      <Act3322 />
    </div>
  )
}
