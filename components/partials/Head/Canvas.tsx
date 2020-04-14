import React, { useRef, useCallback, useEffect } from "react";
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
} from "three";

import "./Canvas.scss";

const fragment = require("../../shaders/Canvas/frag.glsl");
const vertex = require("../../shaders/Canvas/vert.glsl");

// types
type RenderParams = {
  scene: Scene;
  camera: PerspectiveCamera;
  renderer: WebGLRenderer;
};
type AnimateParams = {
  scene: Scene;
  camera: PerspectiveCamera;
  renderer: WebGLRenderer;
};
type HandleCameraAspectParams = {
  camera: PerspectiveCamera;
  renderer: WebGLRenderer;
};

// let mouseX = 0.0
// let mouseY = 0.0

const Canvas: React.FC = () => {
  const onCanvasLoaded = (canvas: HTMLCanvasElement) => {
    if (!canvas) {
      return;
    }

    // init scene
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1.5;

    // render scene
    const renderer = new WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor("#1d1d1d", 0.0);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const vertexCount = 3 * 3;
    const geometry = new BufferGeometry();
    const positions = [];
    const colors = [];
    for (let i = 0; i < vertexCount; i++) {
      // adding x,y,z
      positions.push(Math.random() - 0.5);
      positions.push(Math.random() - 0.5);
      positions.push(Math.random() - 0.5);
      // positions.push(Math.random() - 0.5);
      // adding r,g,b,a
      colors.push(200);
      colors.push(10);
      colors.push(Math.random() * 255);
      // colors.push(Math.random() * 255);
    }
    const positionAttribute = new Float32BufferAttribute(positions, 3);
    const colorAttribute = new Uint8BufferAttribute(colors, 3);
    colorAttribute.normalized = true;
    geometry.setAttribute("position", positionAttribute);
    geometry.setAttribute("color", colorAttribute);
    const material = new RawShaderMaterial({
      uniforms: {
        time: { value: 0.1 }
      },
      vertexShader: vertex.default,
      fragmentShader: fragment.default,
      side: DoubleSide,
      transparent: true
    });
    const mesh = new Mesh(geometry, material);
    scene.add(mesh);

    // start animation
    requestRef.current = window.requestAnimationFrame(() =>
      animate({ scene, camera, renderer })
    );

    window.addEventListener("resize", () => handleResize({ camera, renderer }));
  };

  // animate
  const requestRef = useRef(0);
  const animate = useCallback(({ scene, camera, renderer }: AnimateParams) => {
    requestRef.current = window.requestAnimationFrame(() =>
      animate({ scene, camera, renderer })
    );
    render({ scene, camera, renderer });
  }, []);
  useEffect(() => {
    return () => window.cancelAnimationFrame(requestRef.current);
  }, [animate]);

  // handle resize
  const handleResize = ({ camera, renderer }: HandleCameraAspectParams) => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  useEffect(() => {
    return () => window.removeEventListener("resize", () => handleResize);
  });

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
    const time = performance.now();
    const object = scene.children[0] as any;
    object.material.uniforms.time.value = Math.sin(time) * 0.001;
    renderer.render(scene, camera);
  };
  return (
    <div className="CanvasWrap">
      <canvas ref={onCanvasLoaded} />
    </div>
  );
};

export default Canvas;
