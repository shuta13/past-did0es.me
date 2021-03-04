import styles from "./ImagePostProcess.module.scss";
import React, { useRef, useEffect, useState } from "react";
import Router from "next/router";
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
const vert = require("../shaders/ImagePostProcess/index.vert");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const frag = require("../shaders/ImagePostProcess/index.frag");

type AnimateParams = {
  scene: Scene;
  camera: OrthographicCamera;
  renderer: WebGLRenderer;
  uniforms: any;
  clock: Clock;
  image: HTMLImageElement;
};
type HandleResizeParams = {
  camera: OrthographicCamera;
  renderer: WebGLRenderer;
};

const ImagePostProcess: React.FC<{
  img: string;
}> = ({ img }) => {
  const [textureImage, setTextureImage] = useState("");
  useEffect(() => {
    setTextureImage(img);
  }, [img]);
  const config = {
    width: 0,
    height: 0,
    imageWidth: 0,
    imageHeight: 0
  };
  let isNeedsStopAnimate = false;
  const parentRef = useRef<HTMLDivElement>(null);
  const handleResize = ({ camera, renderer }: HandleResizeParams) => {
    isNeedsStopAnimate = true;

    const refRect = parentRef.current?.getBoundingClientRect();
    config.width = refRect !== undefined ? refRect?.right - refRect.left : 0;
    config.height = refRect !== undefined ? refRect?.bottom - refRect.top : 0;
    // const halfWidth = width / 2;
    // const halfHeight = height / 2;
    const aspectRatio = config.width / config.height;
    const scene = {
      width: 0,
      height: 0
    };
    if (config.width >= config.height) {
      scene.width = 2.0;
      scene.height = scene.width / aspectRatio;
    } else {
      scene.height = 2.0;
      scene.width = scene.height / aspectRatio;
    }
    camera.left = -scene.width / 2;
    camera.right = scene.width / 2;
    camera.top = scene.height / 2;
    camera.bottom = scene.height / 2;
    camera.updateProjectionMatrix();
    renderer.setSize(config.width, config.height);

    // renderer.setSize(window.innerWidth, window.innerHeight);
    isNeedsStopAnimate = false;
  };
  let animationFrameId = 0;
  const animate = ({
    scene,
    camera,
    renderer,
    uniforms,
    clock,
    image
  }: AnimateParams) => {
    if (isNeedsStopAnimate) return;
    animationFrameId = requestAnimationFrame(() =>
      animate({ scene, camera, renderer, uniforms, clock, image })
    );
    uniforms.time.value += clock.getDelta();
    uniforms.resolution.value = new Vector2(config.width, config.height);
    image.onload = () => {
      config.imageWidth = image.naturalWidth;
      config.imageHeight = image.naturalHeight;
      uniforms.textureSize.value = new Vector2(
        config.imageWidth,
        config.imageHeight
      );
    };
    renderer.render(scene, camera);
  };
  // emit的なのでボタン押した時にcancelを実行する
  Router.events.on("routeChangeStart", () =>
    cancelAnimationFrame(animationFrameId)
  );
  // cancelAnimationFrame(animationFrameId);
  const onCanvasLoaded = (canvas: HTMLCanvasElement) => {
    if (!canvas) return;
    config.width = window.innerWidth;
    config.height = window.innerHeight;
    const scene = new Scene();
    const camera = new OrthographicCamera(-1, 1, 1, -1, 1, 1000);
    camera.position.set(0, 0, 100);
    camera.lookAt(scene.position);
    const image = new Image();
    image.src = textureImage;
    image.onload = () => {
      config.imageWidth = image.naturalWidth;
      config.imageHeight = image.naturalHeight;

      const uniforms = {
        time: {
          type: "f",
          value: 0.0
        },
        resolution: {
          type: "v2",
          value: new Vector2(config.width, config.height)
        },
        texture: {
          type: "t",
          value: new TextureLoader().load(textureImage)
        },
        textureSize: {
          type: "v2",
          value: new Vector2(config.imageWidth, config.imageHeight)
        }
      };
      const geometry = new PlaneBufferGeometry(2, 2);
      const material = new RawShaderMaterial({
        uniforms: uniforms,
        vertexShader: vert.default,
        fragmentShader: frag.default
      });
      const mesh = new Mesh(geometry, material);
      scene.add(mesh);

      const clock = new Clock();
      clock.start();

      const renderer = new WebGLRenderer({ canvas: canvas, antialias: false });
      renderer.setClearColor(0x1d1d1d);
      renderer.setSize(config.width, config.height);

      window.addEventListener("resize", () =>
        handleResize({ camera, renderer })
      );
      animate({ scene, camera, renderer, uniforms, clock, image });
    };
  };
  useEffect(() => {
    return () => window.removeEventListener("resize", () => handleResize);
  });

  return (
    <div className={styles.wrap} ref={parentRef}>
      <canvas className={styles.canvas} ref={onCanvasLoaded} />
    </div>
  );
};

export default ImagePostProcess;
