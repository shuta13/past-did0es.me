import "./DetailsImage.scss";
import React, { useEffect } from "react";
// import ImagePostProcess from "./ImagePostProcess";
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

const vert = require("../shaders/DetailsImage/index.vert");
const frag = require("../shaders/DetailsImage/index.frag");

type AnimateParams = {
  scene: Scene;
  camera: OrthographicCamera;
  renderer: WebGLRenderer;
  uniforms: any;
};

const DetailsImage: React.FC<{ img: string; href: string }> = ({
  img,
  href
}) => {
  let isNeedsStopAnimate = false;
  const handleResize = (renderer: WebGLRenderer) => {
    isNeedsStopAnimate = true;
    renderer.setSize(window.innerWidth, window.innerHeight);
    isNeedsStopAnimate = false;
  };
  const animate = ({ scene, camera, renderer, uniforms }: AnimateParams) => {
    if (isNeedsStopAnimate) return;
    requestAnimationFrame(() => animate({ scene, camera, renderer, uniforms }));
    // geometry = new PlaneBufferGeometry(window.innerWidth, window.innerHeight, 1, 1);
    uniforms.time.value = performance.now() * 0.001;
    // uniforms.resolution.value = new Vector2(window.innerWidth, window.innerHeight)
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
      },
      texture: {
        type: "t",
        value: new TextureLoader().load(img)
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
      antialias: false
    });
    renderer.setClearColor(0x1d1d1d);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
    window.addEventListener("resize", () => handleResize(renderer));
    animate({ scene, camera, renderer, uniforms });
  };
  useEffect(() => {
    return () => window.removeEventListener("resize", () => handleResize);
  });
  return (
    <canvas ref={onCanvasLoaded} />
    // <a
    //   className="DetailsImageWrap"
    //   href={href}
    //   target="_blank"
    //   rel="noopener noreferrer"
    // >
    //   <ImagePostProcess img={img} isDetails={true} />
    // </a>
  );
};

export default DetailsImage;
