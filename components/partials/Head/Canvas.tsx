import React, { useState, Fragment } from 'react'
import {
  WebGLRenderer,
  Scene, 
  PerspectiveCamera,
  Clock,
  TextureLoader,
  RawShaderMaterial,
  DoubleSide,
  Mesh
} from 'three'

const loadFont = require("load-bmfont")
const createGeometry = require("three-bmfont-text")
const MDFShader = require("three-bmfont-text/shaders/msdf")
const fontFile = require('../../../public/static/fonts/PoiretOne-Regular.ttf')
const fontAtlas = require('../../../public/static/PoiretOne-Regular.png')
const vertex = require('./shader/vertex.glsl')
const fragment = require('./shader/fragment.glsl')

import useGetWindowSize from '../../hooks/useGetWindowSize'

// types
type ParamsAnimate = {
  renderer: THREE.WebGLRenderer
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  clock: THREE.Clock
}
type ParamsLoader = {
  renderer: THREE.WebGLRenderer
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  texture: any
  clock: THREE.Clock
}
type ParamsInit = {
  geometry: any
  texture: any
  scene: THREE.Scene
  clock: THREE.Clock
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
}
type ParamsCreateMesh = {
  geometry: any
  texture: any
  scene: THREE.Scene
}
type ParamsRender = {
  clock: THREE.Clock
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
}
type ParamsLoadBMF = {
  scene: THREE.Scene
  clock: THREE.Clock
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
}

const Canvas: React.FC = () => {
  // call custom hook
  const { width, height } = useGetWindowSize()

  // use state
  const [geometry, setGeometry] = useState()
  const [loader, setLoader] = useState()
  const [material, setMaterial] = useState()
  const [mesh, setMesh] = useState()

  const onCanvasLoaded = (canvas: HTMLCanvasElement) => {
    if (!canvas) {
      return;
    }
    const renderer = new WebGLRenderer({ canvas: canvas, antialias: true })
    const scene = new Scene()
    const camera = new PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000)
    const clock = new Clock()
    
    camera.position.z = 150
    renderer.setClearColor('#1d1d1d')
    renderer.setSize(width, height)
    renderer.setPixelRatio(window.devicePixelRatio)

    loadBMF({ scene, clock, camera, renderer })
    console.log('hoge')
    // animate({ renderer, scene, camera })
  }

  const loadBMF = ({ scene, clock, camera, renderer }: ParamsLoadBMF) => {
    loadFont(fontFile, ({err, font}: { err: string, font: any }) => {
      setGeometry(createGeometry({
        font,
        text: 'APOSTRO'
      }))
    })
    
    setLoader(new TextureLoader())
    loader.load(fontAtlas, (texture: any) => loadCallback({ scene, clock, camera, renderer, texture }))

    const loadCallback = ({ renderer, scene, camera, texture, clock }: ParamsLoader) => {
      setTimeout(() => {
        init({ geometry, texture, scene, clock, camera, renderer })
        animate({ renderer, scene, camera, clock })
      })
    }
  }

  const init = ({ geometry, texture, scene, clock, camera, renderer, }: ParamsInit) => {
    createMesh({ geometry, texture, scene })
    render({ clock, scene, camera, renderer })
  }

  const createMesh = ({ geometry, texture, scene }: ParamsCreateMesh) => {
    setMaterial(new RawShaderMaterial(
      MDFShader({
        vertexShader: vertex,
        fragmentShader: fragment,
        color: '#0xFFFFFF',
        map: texture,
        side: DoubleSide,
        transparent: true,
        negate: false
      })
    ))
    material.uniforms.time = { type: "f", value: 0.0 }

    setMesh(new Mesh(geometry, material))
    mesh.position.set(-90, -10, 0)
    mesh.rotation.set(Math.PI, 0, 0)
    scene.add(mesh)
  }

  const animate = ({ renderer, scene, camera, clock }: ParamsAnimate) => {
    window.requestAnimationFrame(() => animate({ renderer, scene, camera, clock }))
    render({ clock, scene, camera, renderer })
  }

  const render = ({ clock, scene, camera, renderer }: ParamsRender) => {
    mesh.material.uniforms.time.value = clock.getElapsedTime()
    mesh.material.uniformsNeedUpdate = true
    renderer.render(scene, camera)
  }

  return (
    <div>
      <canvas ref={onCanvasLoaded}></canvas>
    </div>
  )
}

export default Canvas