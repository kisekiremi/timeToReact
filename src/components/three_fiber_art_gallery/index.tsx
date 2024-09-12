import React, { Suspense } from 'react'
import { TextureLoader, Vector3 } from 'three'
import { Canvas, useFrame, useLoader, useThree } from 'react-three-fiber'
import { Scroll, ScrollControls, Text, SpotLight, Plane } from '@react-three/drei'
import arts from './modules/arts'

interface IArtType {
  art: { title: string; imgPath: string }
  idx: number
}
/* 单个 */
const Wall_art = (item: IArtType) => {
  const { art, idx } = item
  const { width, height } = useThree(state => state.viewport)
  const gap = 4
  const imgWidth = 3
  const texture = useLoader(TextureLoader, art.imgPath, tex => {
    console.log(`${idx + art.title} Texture Loaded`, tex)
  })
  // 聚光灯+文字位置
  const spLightP = ((idx + 0.9) * (imgWidth + gap) + (idx + 0.9) - width / gap).toFixed(3)
  const textP = idx * (imgWidth + gap)
  console.log(`${idx} sp`, spLightP, textP)

  return (
    <>
      <group>
        {/* light */}
        <SpotLight
          position={[Number(spLightP), 2.5, 1]}
          angle={0.6}
          attenuation={2}
          anglePower={5}
          intensity={10}
          distance={10}
          castShadow
          color={0xffffff}
        />

        {/* picture */}
        <mesh castShadow position={[0.5, 0, 0]}>
          <boxGeometry attach="geometry" args={[imgWidth, height / 1.6, 1]} />
          <meshStandardMaterial attach="material" map={texture} roughness={0.2} metalness={0.6} />
        </mesh>

        {/* text */}
        <mesh position={[textP, -3, 0]}>
          <Plane args={[2.25, 0.5]} />
          <Text color={0x333} fontSize={0.25}>
            {art.title}
          </Text>
        </mesh>
      </group>
    </>
  )
}

const Scene = () => {
  const { width } = useThree(state => state.viewport)
  const textScale = width < 5.5 ? 2 : 4
  console.log('scene width: ', width, ' | textScale', textScale)

  return (
    <Suspense
      fallback={`<html style={{ fontSize: '6vw', whiteSpace: 'nowrap', color: 'white' }}>
          <body>loading...</body>
        </html>`}
    >
      <ScrollControls horizontal damping={0.5} pages={arts.length * 0.7} distance={1}>
        <Scroll>
          {arts.map((e, i) => {
            return <Wall_art key={e.title} art={e} idx={i} />
          })}
        </Scroll>
      </ScrollControls>
    </Suspense>
  )
}

const Rig = () => {
  const { camera, pointer } = useThree()
  const vec = new Vector3()
  return useFrame(() => camera.position.lerp(vec.set(pointer.x * 0.25, pointer.y * 0.25, camera.position.z), 0.15))
}

export default function () {
  return (
    <>
      <Canvas>
        <ambientLight intensity={1} color={0xffffff} />

        <Scene />

        <Rig />
      </Canvas>
    </>
  )
}
