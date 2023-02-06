import React from 'react'
import '../style/modules/smalltalk.scss'
import LeafMap from '../components/leaflet/index'

export default function smalltalk() {
  return (
    <div className="smalltalk flex-c h-full">
      <LeafMap></LeafMap>
    </div>
  )
}
