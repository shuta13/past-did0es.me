import styles from "./index.module.scss";
import {
  Scene,
  OrthographicCamera,
  WebGLRenderer,
  PlaneBufferGeometry,
  RawShaderMaterial,
  Mesh,
  Vector2,
  Clock,
} from "three";
import { useEffect } from "react";
import { CanvasColor } from "../../../pages";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const vert = require("./index.vert");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const frag = require("./index.frag");

interface AnimateParams {
  scene: Scene;
  camera: OrthographicCamera;
  renderer: WebGLRenderer;
  uniforms: any;
  clock: Clock;
}

export const Main: React.FC<{ canvasColor: CanvasColor }> = (props) => {
  const { canvasColor } = props;
  let isNeedsStopAnimate = false;
  let animationFrameId = 0;
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
    clock,
  }: AnimateParams) => {
    animationFrameId = requestAnimationFrame(() =>
      animate({ scene, camera, renderer, uniforms, clock })
    );
    if (isNeedsStopAnimate) return;
    uniforms.time.value += clock.getDelta();
    renderer.render(scene, camera);
  };
  useEffect(() => {
    return () => cancelAnimationFrame(animationFrameId);
  });
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
        value: 0.0,
      },
      resolution: {
        type: "v2",
        value: new Vector2(
          window.innerWidth * window.devicePixelRatio,
          window.innerHeight * window.devicePixelRatio
        ),
      },
      canvasColor: {
        type: "i",
        value: canvasColor === "theme" ? 1 : canvasColor === "twilight" ? 2 : 3,
      },
    };
    const material = new RawShaderMaterial({
      uniforms: uniforms,
      vertexShader: vert.default,
      fragmentShader: frag.default,
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
      depth: false,
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
  return <canvas ref={onCanvasLoaded} className={styles.wrap} />;
};
