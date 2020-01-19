import React, { useEffect, useState } from 'react'
import {
  WebGLRenderer,
  Scene, 
  PerspectiveCamera,
  BoxGeometry, 
  MeshBasicMaterial,
  Mesh
} from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as VFX from 'react-vfx'

import './Canvas.scss'
import useGetWindowSize from '../../hooks/useGetWindowSize'

const model = require('../../../public/static/models/marcus_aurelius/scene.gltf')

type OnCanvasLoaded = {
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  cube?: THREE.Mesh
}

const Canvas: React.FC = () => {
  const { width, height } = useGetWindowSize()

  const onCanvasLoaded = (canvas: HTMLCanvasElement) => {
    if (!canvas) {
      return;
    }
    const renderer = new WebGLRenderer({ canvas: canvas, antialias: true })
    const scene = new Scene()
    const camera = new PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000)

    const loader = new GLTFLoader()
    loader.load(model, (gltf) => {
      scene.add(gltf.scene)
    })

    const geometry = new BoxGeometry(1, 1, 1)
    const material = new MeshBasicMaterial({ color: 0xff00ff })

    camera.position.z = 4
    renderer.setClearColor('#1d1d1d')

    

    renderer.setSize(width, height)
    animate({ renderer, scene, camera })
  }

  const animate = ({ renderer, scene, camera }: OnCanvasLoaded) => {
    window.requestAnimationFrame(() => animate({ renderer, scene, camera }))
    renderer.render(scene, camera)
  }

  return (
    <div className="WrapCanvas">
      <canvas className="Canvas" ref={onCanvasLoaded}></canvas>
      <VFX.VFXProvider>
        <div className="ClipVFX">
          <VFX.VFXImg className="VFX" shader={"rgbShift"} src={require('../../../public/static/apostro.png')} alt="APOSTRO logo"/>
        </div>
      </VFX.VFXProvider>
    </div>
  )
}

export default Canvas