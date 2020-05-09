import "./AppLoading.scss";
import React, { useEffect } from "react";
import {
  Scene,
  OrthographicCamera,
  WebGLRenderer,
  PlaneBufferGeometry,
  RawShaderMaterial,
  Mesh,
  Vector2,
  TextureLoader
} from "three";

const vert = require("../../shaders/Loading/index.vert");
const frag = require("../../shaders/Loading/index.frag");

type AnimateParams = {
  scene: Scene;
  camera: OrthographicCamera;
  renderer: WebGLRenderer;
  uniforms: any;
};
type HandleResizeParams = {
  geometry: PlaneBufferGeometry;
  renderer: WebGLRenderer;
}

const AppLoading = () => {
  let isNeedsStopUpdate = false;
  const handleResize = ({ geometry, renderer }: HandleResizeParams) => {
    isNeedsStopUpdate = true;
    // renderer.setSize(window.innerWidth, window.innerHeight);
    isNeedsStopUpdate = false;
  };
  const animate = ({ scene, camera, renderer, uniforms }: AnimateParams) => {
    if (isNeedsStopUpdate) return;
    requestAnimationFrame(() => animate({ scene, camera, renderer, uniforms }));
    uniforms.time.value = performance.now() * 0.001;
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
        value: new Vector2(400, 400)
        // value: new Vector2(window.innerWidth, window.innerHeight)
      },
      texture: {
        type: "t",
        value: new TextureLoader().load("/loading.png")
      }
    };
    const material = new RawShaderMaterial({
      uniforms: uniforms,
      vertexShader: vert.default,
      fragmentShader: frag.default
    });
    const mesh = new Mesh(geometry, material);
    scene.add(mesh);
    const renderer = new WebGLRenderer({
      canvas: canvas,
      antialias: false,
      alpha: false
    });
    renderer.setClearColor(0x1d1d1d);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(400, 400);
    // renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
    window.addEventListener("resize", () => handleResize({ geometry, renderer }));
    animate({ scene, camera, renderer, uniforms });
  };
  useEffect(() => {
    return () => window.removeEventListener("resize", () => handleResize);
  });
  return <canvas ref={onCanvasLoaded} className="AppLoading" />;
};

export default AppLoading;
