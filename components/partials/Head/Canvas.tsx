import React, { useRef, useCallback, useEffect } from 'react'
import {
  WebGLRenderer,
  Scene, 
  PerspectiveCamera,
  BufferGeometry,
  Float32BufferAttribute,
  Uint8BufferAttribute,
  RawShaderMaterial,
  DoubleSide,
  Mesh
} from 'three'

import './Canvas.scss'

const fragment = require('../../shaders/Canvas/frag.glsl')
const vertex = require('../../shaders/Canvas/vert.glsl')

// types
type RenderParams = {
  scene: Scene
  camera: PerspectiveCamera
  renderer: WebGLRenderer
}
type AnimateParams = {
  scene: Scene
  camera: PerspectiveCamera
  renderer: WebGLRenderer
}
type HandleCameraAspectParams = {
  camera: PerspectiveCamera
  renderer: WebGLRenderer
}

// let mouseX = 0.0
// let mouseY = 0.0

const Canvas: React.FC = () => {
  let width = window.innerWidth * 0.7
  const maxObjWidth = 720
  const minObjWidth = 300
  if (width >= maxObjWidth) width = maxObjWidth
  else if (width <= minObjWidth) width = minObjWidth
  const onCanvasLoaded = (canvas: HTMLCanvasElement) => {
    if (!canvas) {
      return
    }

    // init scene
    const scene = new Scene()
    const camera = new PerspectiveCamera(75, width / width, 0.1, 1000)
    camera.position.z = 1.5

    // render scene
    const renderer = new WebGLRenderer({ canvas: canvas, antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor('#1d1d1d')
    renderer.setSize(width, width)

    const vertexCount = 100 * 4;
    const geometry = new BufferGeometry()
    const positions = []
    const colors = []
    for (let i = 0; i < vertexCount; i++) {
      // adding x,y,z
      positions.push( Math.random() - 0.5 )
			positions.push( Math.random() - 0.5 )
			positions.push( Math.random() - 0.5 )
			positions.push( Math.random() - 0.5 )
			// adding r,g,b,a
			colors.push( Math.random() * 255 % 200)
			colors.push( Math.random() * 255 % 100)
			colors.push( Math.random() * 255 )
			colors.push( Math.random() * 255)
    }
    const positionAttribute = new Float32BufferAttribute(positions, 4)
    const colorAttribute = new Uint8BufferAttribute(colors, 4)
    colorAttribute.normalized = true
    geometry.setAttribute('position', positionAttribute)
    geometry.setAttribute('color', colorAttribute)
    const material = new RawShaderMaterial({
      uniforms: {
        time: { value: 0.1 }
      },
      vertexShader: vertex.default,
      fragmentShader: fragment.default,
      side: DoubleSide,
      transparent: true
    })
    const mesh = new Mesh(geometry, material)
    scene.add(mesh)

    // start animation
    requestRef.current = window.requestAnimationFrame(() => animate({ scene, camera, renderer }))

    window.addEventListener('resize', () => handleResize({ camera, renderer }))
  }

  // animate
  const requestRef = useRef(0)
  const animate = useCallback(({ scene, camera, renderer }: AnimateParams) => {
    requestRef.current = window.requestAnimationFrame(() => animate({ scene, camera, renderer }))
    render({ scene, camera, renderer })
  }, [])
  useEffect(() => {
    return () => window.cancelAnimationFrame(requestRef.current)
  }, [animate])

  // handle resize
  const handleResize = ({ camera, renderer }: HandleCameraAspectParams) => {
    let width = window.innerWidth
    if (width >= maxObjWidth) width = maxObjWidth
    else if (width <= minObjWidth) width = minObjWidth
    camera.aspect = width / width
    camera.updateProjectionMatrix()
    renderer.setSize(width, width)
  }
  useEffect(() => {
    return () => window.removeEventListener('resize', () => handleResize)
  })

  // track mouse pos
  // const handleMouseMove = (event: any) => {
  //   mouseX = event.clientX
  //   mouseY = event.clientY
  // }
  // useEffect(() => {
  //   window.addEventListener('mousemove', () => handleMouseMove(event))
  //   return window.removeEventListener('mousemove', () => handleMouseMove)
  // }, [])

  // render
  const render = ({ scene, camera, renderer }: RenderParams) => {
    const time = performance.now()
    const object = scene.children[0] as any
    let positions = [] as any
    const threshold = 0.6
    object.geometry.attributes.position.array.map((pos: number, index: number) => {
      if (index % 3 === 1) {
        pos += Math.random() * 0.05 * Math.cos(time * 0.005 * Math.sin(time)) * Math.sin(time * Math.random() * Math.sin(time))
        pos %= threshold
        positions.push(pos)
      }
      else if (index % 3 === 2) {
        pos += Math.random() * 0.04 * Math.cos(time * 0.005) * Math.sin(time * 0.005)
        pos %= threshold
        positions.push(pos)
      }
      else {
        pos += Math.random() * 0.0024 * Math.cos(time * 0.005) * Math.sin(time * 0.005)
        pos %= threshold
        positions.push(pos)
      }
    })
    const positionAttribute = new Float32BufferAttribute(positions, 4)
    object.geometry.setAttribute('position', positionAttribute)

    object.material.uniforms.time.value = Math.atan(time * 0.005)

    // object.rotation.y = mouseX * 0.0008
    // object.rotation.x = mouseY * 0.0008

		renderer.render( scene, camera )
  }
  return (
    <div className="CanvasWrap">
      <canvas ref={onCanvasLoaded} />
    </div>
  )
}

export default Canvas