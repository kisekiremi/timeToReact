import React, { useRef } from 'react'
import { Animator } from '../../../utils/class'
import './index.scss'

export default function () {
  const ref22 = useRef<HTMLDivElement>(null!)
  const ref33 = useRef<HTMLDivElement>(null!)

  async function actHandle(e: any, w: number, h: number, arr: number) {
    const gapTime = 60 / arr
    let curColumn = 0
    let curRow = 0
    const act = (bool: boolean) => {
      e.current.style.backgroundPositionX = `-${bool ? curColumn * w : 0}px`
      e.current.style.backgroundPositionY = `-${bool ? curRow * h : 0}px`
    }
    for (let i = 1; i < arr; i++) {
      if (i % 4 === 0) {
        curColumn = 0
        curRow += 1
      } else {
        curColumn += 1
      }
      await new Animator(gapTime, () => act(true)).animate()
    }
    // 初始化
    await new Animator(gapTime, () => act(false)).animate()
  }

  // function setNode(e: HTMLElement) {
  //   const t = e.getBoundingClientRect().width
  //   return t > 960 ? 'flex-row' : 'flex-col'
  // }

  // const setCC = useMemo(() => {
  //   // if (node != null) {
  //   //   // node.current.getBoundingClientRect().width > 960 ? 'flex-row' : 'flex-col'
  //   //   console.log(node.current)
  //   // } else {
  //   // }
  //   setNode(act3322Ref.current)
  // }, [act3322Ref.current])

  return (
    <div className={`act3322 text-center transition`}>
      <div
        className="btn-combo text-center hoverBright cursor-pointer rounded border-sky-200 border-2"
        onClick={() => {
          actHandle(ref22, Number(1804 / 4), Number(1503 / 3), 11)
          actHandle(ref33, Number(1324 / 4), Number(1353 / 3), 11)
        }}
      >
        <span>2233 COMBO</span>
      </div>
      <div className="box22 text-center">
        <div
          className="btn-22 hoverBright cursor-pointer rounded  border-orange-200 border-2"
          onClick={() => actHandle(ref22, Number(1804 / 4), Number(1503 / 3), 11)}
        >
          <span>22 Act</span>
        </div>
        <div ref={ref22} className={`btn22_animate`}></div>
      </div>

      <div className="box33 text-center">
        <div
          className="btn-33 hoverBright cursor-pointer rounded  border-red-200 border-2"
          onClick={() => actHandle(ref33, Number(1324 / 4), Number(1353 / 3), 11)}
        >
          <span>33 Act</span>
        </div>
        <div ref={ref33} className="btn33_animate"></div>
      </div>
    </div>
  )
}
