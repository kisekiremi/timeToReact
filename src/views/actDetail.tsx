import React from 'react'

export default function () {
  const t = Math.trunc(Math.random() * 100)

  return (
    <div className="foDetail mt-5">
      <span>moji-{t}</span>
    </div>
  )
}
