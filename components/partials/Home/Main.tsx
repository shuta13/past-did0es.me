import "./Main.scss";
import React from "react";
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
    uniforms.u_time.value = performance.now() * 0.001;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  };
  const onCanvasLoaded = (canvas: HTMLCanvasElement) => {
    if (!canvas) return;
    const scene = new Scene();
    const camera = new OrthographicCamera(-1, 1, 1, -1, 0, -1);
    scene.add(camera);
    const geometry = new PlaneBufferGeometry(2, 2);
    const uniforms = {
      u_time: {
        // eslint-disable-line
        type: "f",
        value: 0.0
      },
      u_resolution: {
        // eslint-disable-line
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
    const renderer = new WebGLRenderer({ canvas: canvas, antialias: false });
    renderer.setClearColor("#1d1d1d");
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
    const clock = new Clock();
    clock.start();
    animate({ scene, camera, renderer, uniforms, clock });
  };
  return <canvas ref={onCanvasLoaded} className="Main" />;
};

export default Main;
