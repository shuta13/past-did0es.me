import "./Main.scss";
import React, { useState, useEffect } from "react";
import {
  Scene,
  OrthographicCamera,
  WebGLRenderer,
  PlaneBufferGeometry,
  RawShaderMaterial,
  Mesh,
  Vector2,
  TextureLoader,
  Clock
} from "three";

const vert = require("../../shaders/Main/index.vert");
const frag = require("../../shaders/Main/index.frag");

type AnimateParams = {
  scene: Scene;
  camera: OrthographicCamera;
  renderer: WebGLRenderer;
  uniforms: any;
  clock: Clock;
};

const Main: React.FC = () => {
  let isNeedsStopAnimate = false;
  const handleResize = (renderer: WebGLRenderer) => {
    isNeedsStopAnimate = true;
    renderer.setSize(window.innerWidth, window.innerHeight);
    isNeedsStopAnimate = false;
  };
  const animate = ({
    scene,
    camera,
    renderer,
    uniforms,
    clock
  }: AnimateParams) => {
    requestAnimationFrame(() =>
      animate({ scene, camera, renderer, uniforms, clock })
    );
    if (isNeedsStopAnimate) return;
    uniforms.time.value += clock.getDelta();
    renderer.render(scene, camera);
  };
  const onCanvasLoaded = (canvas: HTMLCanvasElement) => {
    if (!canvas) return;
    const scene = new Scene();
    const camera = new OrthographicCamera(-1, 1, 1, -1, 1, 1000);
    camera.position.set(0, 0, 100);
    camera.lookAt(scene.position);
    scene.add(camera);
    const geometry = new PlaneBufferGeometry(2, 2);
    const uniforms = {
      time: {
        type: "f",
        value: 0.0
      },
      resolution: {
        type: "v2",
        value: new Vector2(window.innerWidth, window.innerHeight)
      }
    };
    const material = new RawShaderMaterial({
      uniforms: uniforms,
      vertexShader: vert.default,
      fragmentShader: frag.default
    });
    const mesh = new Mesh(geometry, material);
    scene.add(mesh);
    const clock = new Clock();
    clock.start();
    const renderer = new WebGLRenderer({
      canvas: canvas,
      antialias: false,
      alpha: false,
      stencil: false,
      depth: false
    });
    renderer.setClearColor(0x1d1d1d);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
    window.addEventListener("resize", () => handleResize(renderer));
    animate({ scene, camera, renderer, uniforms, clock });
  };
  useEffect(() => {
    return () => window.removeEventListener("resize", () => handleResize);
  });
  return <canvas ref={onCanvasLoaded} className="Main" />;
};

export default Main;
