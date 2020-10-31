import "./LoadingCanvas.scss";
import React, { useEffect } from "react";
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

// eslint-disable-next-line @typescript-eslint/no-var-requires
const vert = require("../../shaders/Loading/index.vert");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const frag = require("../../shaders/Loading/index.frag");

type AnimateParams = {
  scene: Scene;
  camera: OrthographicCamera;
  renderer: WebGLRenderer;
  uniforms: any;
  clock: Clock;
};
type HandleResizeParams = {
  geometry: PlaneBufferGeometry;
  renderer: WebGLRenderer;
};

const LoadingCanvas = () => {
  // let isNeedsStopUpdate = false;
  // const handleResize = ({ geometry, renderer }: HandleResizeParams) => {
  //   isNeedsStopUpdate = true;
  //   // renderer.setSize(window.innerWidth, window.innerHeight);
  //   isNeedsStopUpdate = false;
  // };
  let animationFrameId = 0;
  const animate = ({
    scene,
    camera,
    renderer,
    uniforms,
    clock
  }: AnimateParams) => {
    // if (isNeedsStopUpdate) return;
    animationFrameId = requestAnimationFrame(() =>
      animate({ scene, camera, renderer, uniforms, clock })
    );
    uniforms.time.value += clock.getDelta();
    renderer.render(scene, camera);
  };
  useEffect(() => {
    return () => cancelAnimationFrame(animationFrameId);
  });
  const onCanvasLoaded = (canvas: HTMLCanvasElement) => {
    if (!canvas) return;
    const width = 208;
    const height = 208;
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
        value: new Vector2(
          width * window.devicePixelRatio,
          height * window.devicePixelRatio
        )
      },
      texture: {
        type: "t",
        value: new TextureLoader().load("/loading.jpg")
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
      alpha: false
    });
    renderer.setClearColor(0x1d1d1d);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    // renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
    // window.addEventListener("resize", () =>
    //   handleResize({ geometry, renderer })
    // );
    animate({ scene, camera, renderer, uniforms, clock });
  };
  useEffect(() => {
    // return () => window.removeEventListener("resize", () => handleResize);
  });
  return <canvas ref={onCanvasLoaded} className="AppLoading" />;
};

export default LoadingCanvas;
