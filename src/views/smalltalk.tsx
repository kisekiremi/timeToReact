import React from 'react'
import '../style/views/smalltalk.scss'
import LeafMap from '../components/leaflet/index'

export default function () {
  return (
    <div className="smalltalk flex-c w-full h-full">
      <LeafMap></LeafMap>
    </div>
  )
}
