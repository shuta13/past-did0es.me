import React from 'react'
import {
  WebGLRenderer,
  Scene, 
  PerspectiveCamera,
  BoxGeometry, 
  MeshBasicMaterial,
  Mesh
} from 'three'
import * as VFX from 'react-vfx'

import './Canvas.scss'
import useGetWindowSize from '../../hooks/useGetWindowSize'

type OnCanvasLoaded = {
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  cube: THREE.Mesh
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

    const geometry = new BoxGeometry(1, 1, 1)
    const material = new MeshBasicMaterial({ color: 0xff00ff })
    const cube = new Mesh(geometry, material)

    camera.position.z = 4
    renderer.setClearColor('#1d1d1d')
    scene.add(cube)

    renderer.setSize(width, height)
    animate({ renderer, scene, camera, cube })
  }

  const animate = ({ renderer, scene, camera, cube }: OnCanvasLoaded) => {
    window.requestAnimationFrame(() => animate({ renderer, scene, camera, cube }))
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
  }

  return (
    <div className="WrapCanvas">
      {/* <canvas ref={onCanvasLoaded}></canvas> */}
      <VFX.VFXProvider>
        {/* Render text as image, then apply the shader effect! */}
        <div className="ClipVFX">
          <VFX.VFXImg className="VFX" shader={"rgbShift"} src={require('../../../public/static/apostro.png')} alt="APOSTRO logo"/>
        </div>
      </VFX.VFXProvider>
    </div>
  )
}

export default Canvas