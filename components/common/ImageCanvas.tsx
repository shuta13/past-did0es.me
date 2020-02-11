import React, { useRef, useCallback, useEffect, useState } from 'react'
import {
  WebGLRenderer,
  Scene, 
  PerspectiveCamera,
  PlaneGeometry,
  TextureLoader,
  NearestFilter,
  Mesh,
  Vector2,
  AmbientLight,
  MeshPhongMaterial
} from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'

import './ImageCanvas.scss'

const fragment = require('../shaders/ImageCanvas/frag.glsl')
const vertex = require('../shaders/ImageCanvas/vert.glsl')

// ----------
// types
type RenderParams = {
  scene: Scene
  camera?: PerspectiveCamera
  renderer?: WebGLRenderer
  composer: EffectComposer
  customPass?: ShaderPass
}
type AnimateParams = {
  scene: Scene
  camera?: PerspectiveCamera
  renderer?: WebGLRenderer
  composer: EffectComposer
  customPass?: ShaderPass
}
// ----------

let time = 0.0
let shakeWidth = 0.02

const ImageCanvas: React.FC<{ img: string }> = ({ img }) => {
  // set canvas
  const onCanvasLoaded = (canvas: HTMLCanvasElement) => {
    if (!canvas) {
      return
    }

    // init scene
    const scene = new Scene()
    const camera = new PerspectiveCamera(75, 360 / 480, 1, 1000)
    camera.position.z = 1

    // render init
    const renderer = new WebGLRenderer({ canvas: canvas, antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor('#1d1d1d')
    renderer.setSize(480, 360)

    // light 
    const light = new AmbientLight(0xffffff, 1.0)
    scene.add(light)

    // object
    const loader = new TextureLoader()
    const texture = loader.load(`${img}`)
    texture.minFilter = NearestFilter
    const material = new MeshPhongMaterial({
      map: texture
    })
    const geometry = new PlaneGeometry(1, 1, 1, 1)
    const mesh = new Mesh(geometry, material)
    scene.add(mesh)

    // render neutral
    renderer.render(scene, camera)

    const composer = new EffectComposer(renderer)
    const renderPass = new RenderPass(scene, camera)
    composer.addPass(renderPass)

    const shaders = {
      uniforms: {
        'tDiffuse': {
          value: null
        },
        'time': {
          type: 'f',
          value: time
        },
        'resolution': {
          type: 'v2',
          value: new Vector2(window.innerWidth, window.innerHeight)
        },
        'shakeWidth': {
          type: 'f',
          value: shakeWidth
        }
      },
      vertexShader: vertex.default,
      fragmentShader: fragment.default
    }

    const customPass = new ShaderPass(shaders)
    customPass.renderToScreen = true
    composer.addPass(customPass)

    // start animation
    composer.render()
    requestRef.current = window.requestAnimationFrame(() => animate({ scene, composer, customPass }))
  }

  // animate
  const requestRef = useRef(0)
  const animate = useCallback(({ scene, composer, customPass }: AnimateParams) => {
    render({ scene, composer, customPass })
    requestRef.current = window.requestAnimationFrame(() => animate({ scene, composer, customPass }))
  }, [])
  useEffect(() => {
    return () => window.cancelAnimationFrame(requestRef.current)
  }, [animate])

  // render
  const render = ({ scene, composer, customPass }: RenderParams) => {
    // access object of scene
    const object = scene.children[0] as any
    const sec = performance.now() / 1000
    const pass = customPass as any
    pass.uniforms.time.value = sec

		composer.render()
  }

  return (
    <button className="ImageCanvasClip">
      <canvas className="ImageCanvas"
        ref={onCanvasLoaded}
      />
    </button>
  )
}

export default ImageCanvas