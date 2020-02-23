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
type HandleCameraAspectParams = {
  camera: PerspectiveCamera
  renderer: WebGLRenderer
}
// ----------

let time = 0.0
let shakeWidth = 0.015

let fov = 80

let canvasWidth = window.innerWidth
let canvasHeight = window.innerWidth * 0.75

const maxCanvasWidth = 800

const ImageCanvas: React.FC<{ img: string, isDetails?: boolean }> = ({ img, isDetails }) => {
  // set canvas
  const onCanvasLoaded = (canvas: HTMLCanvasElement) => {
    if (!canvas) {
      return
    }

    // init scene

    const scene = new Scene()
    if (!isDetails) {
      shakeWidth = 0.02
      fov = 75
      canvasWidth = 480
      canvasHeight = 360
    }
    if (canvasWidth >= maxCanvasWidth) {
      canvasWidth = maxCanvasWidth
      canvasHeight = maxCanvasWidth * 0.75
    }
    const camera = new PerspectiveCamera(fov, canvasHeight / canvasWidth, 1, 1000)
    camera.position.z = 1

    // render init
    const renderer = new WebGLRenderer({ canvas: canvas, antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor('#1d1d1d')
    renderer.setSize(canvasWidth, canvasHeight)

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

    if (isDetails) window.addEventListener('resize', () => handleResize({ camera, renderer }))
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

  // handle resize
  const handleResize = ({ camera, renderer }: HandleCameraAspectParams) => {
    let width = window.innerWidth
    let height = width * 0.75
    if (width >= maxCanvasWidth) {
      width = maxCanvasWidth
      height = maxCanvasWidth * 0.75
    }
    camera.aspect = height / width
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  }

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
    <div>
      { isDetails &&
        <button className="ImageCanvasClip">
          <canvas className="ImageCanvasDetails"
            ref={onCanvasLoaded}
          />
        </button>
      }
      { !isDetails &&
        <button className="ImageCanvasClip">
          <canvas className="ImageCanvas"
            ref={onCanvasLoaded}
          />
          <img src={img} className="ImageCanvasImg" />
        </button>
      }
    </div>
  )
}

export default ImageCanvas