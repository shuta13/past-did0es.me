import React, { useEffect, useState } from 'react'
import * as THREE from 'three'

import useGetWindowSize from '../../hooks/useGetWindowSize'

const Canvas: React.FC = () => {
  const { width, height } = useGetWindowSize()
  console.log(width, height)

  const init = (canvas: HTMLCanvasElement) => {
    if (!canvas) {
      return;
    }
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true })
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000)

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0xff00ff })
    const cube = new THREE.Mesh(geometry, material)

    camera.position.z = 4
    renderer.setClearColor('#1d1d1d')
    scene.add(cube)

    renderer.setSize(width, height)
    renderer.render(scene, camera)
  }
  return (
    <div>
      <canvas ref={init}></canvas>
    </div>
  )
}

export default Canvas