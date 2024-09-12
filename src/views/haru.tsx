import React, { useEffect } from 'react'
import '../style/views/haru.scss'
import { produceNum } from '../utils/function'
// @ts-ignore
import music from '../assets/audio/modokuoosou_STUDY_WITH_MIKU_ver.mp3'

async function initHaru() {
  console.log('start')

  const listenAudioRef = document.getElementById('listenAudio') as HTMLMediaElement
  listenAudioRef.volume = 0.15

  const cvs = document.getElementById('newCanvas') as HTMLCanvasElement
  const ctx = cvs.getContext('2d')

  let isInit = false
  // 创建音源分析器   创建音源对象
  let audioAnalysis: AnalyserNode
  // 创建存储音频数据数组，用于存储分析器传递的音频信息
  let bufferLength: Uint8Array

  // 开画
  listenAudioRef.onplay = () => {
    // 创建音源节点
    const audioEl = new AudioContext()
    // 链接音源
    const audioSource = audioEl.createMediaElementSource(listenAudioRef)
    // 将音源节点传递给音频分析器
    audioAnalysis = audioEl.createAnalyser()
    // 设置分析器设定，设定为2的幂次方，次方越多显示的柱状条越多，默认2048。地址：https://developer.mozilla.org/zh-CN/docs/Web/API/AnalyserNode/fftSize
    audioAnalysis.fftSize = 32 // 也就是16条柱子
    // 存储分析器导出的分析音频数组
    bufferLength = new Uint8Array(audioAnalysis.frequencyBinCount)
    // 连接分析器和节点
    audioSource.connect(audioAnalysis)
    // 分析器链接至音频最终目标源（通常可以指代为扬声器/音频输出源）
    audioAnalysis.connect(audioEl.destination)
    // console.log('bufferLength', bufferLength)
    isInit = true
    console.log('render')
    render()
  }

  function render() {
    requestAnimationFrame(render)

    if (isInit && ctx) ctx.clearRect(0, 0, cvs.width, cvs.height)
    else return

    // 实时获取更新bufferLength的数据
    audioAnalysis.getByteFrequencyData(bufferLength)

    // 拿到单条条形柱的宽，bufferLength的长度是 = audioAnalysis.fftSize / 2
    const barW = cvs.width / bufferLength.length

    // 绘制bar条
    for (let i = 0; i < bufferLength.length; i++) {
      const barH =
        (bufferLength[i] / 255) * cvs.height > cvs.height * 0.98
          ? cvs.height * 0.98
          : (bufferLength[i] / 255) * cvs.height
      const trueBarW = barW - 10
      const x = i * barW + barW / 2 - trueBarW / 2 // transform(translate(-50%,-50%))
      const y = cvs.height - barH
      ctx.strokeStyle = `rgb(
        ${Math.floor(Math.abs(255 - 12.5 * Math.random() * 5))},
        ${Math.floor(Math.abs(255 - 77.5 * (i + 1)))},
        ${Math.floor(Math.abs(255 - 26.5 * Math.random() * 4))})`
      ctx.beginPath()
      ctx.roundRect(x, y, trueBarW, barH, [10, 10, 0, 0])
      ctx.stroke()
    }
  }
}

export default function haru() {
  useEffect(() => {
    initHaru()
    return () => {
      //
    }
  }, [initHaru])

  return (
    <div className="haru flex-c flex-wrap flex-col bg-slate-600 w-full min-h-full">
      <>
        <audio id="listenAudio" src={music} crossOrigin="anonymous" controls preload="" loop></audio>
        <br />
        <canvas id="newCanvas"></canvas>
      </>
    </div>
  )
}
