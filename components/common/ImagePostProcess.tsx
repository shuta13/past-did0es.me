import React, { useRef, useCallback, useEffect, useState } from "react";
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  PlaneBufferGeometry,
  TextureLoader,
  NearestFilter,
  Mesh,
  Vector2,
  AmbientLight,
  MeshPhongMaterial
} from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";

import "./ImagePostProcess.scss";

const fragment = require("../shaders/ImagePostProcess/frag.glsl");
const vertex = require("../shaders/ImagePostProcess/vert.glsl");

// ----------
// types
type RenderParams = {
  scene: Scene;
  camera?: PerspectiveCamera;
  renderer?: WebGLRenderer;
  composer: EffectComposer;
  customPass?: ShaderPass;
};
type AnimateParams = {
  scene: Scene;
  camera?: PerspectiveCamera;
  renderer?: WebGLRenderer;
  composer: EffectComposer;
  customPass?: ShaderPass;
};
type HandleCameraAspectParams = {
  camera: PerspectiveCamera;
  renderer: WebGLRenderer;
};
// ----------

let time = 0.0;
const payloadHeight = 0.7;
const maxMainWidth = 960;

const ImagePostProcess: React.FC<{ img: string; isDetails?: boolean }> = ({
  img,
  isDetails
}) => {
  // set canvas
  const onMainLoaded = (canvas: HTMLMainElement) => {
    if (!canvas) {
      return;
    }

    // init scene
    const fov = 75;
    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerWidth * payloadHeight;
    let shakeWidth = 0.015;
    const scene = new Scene();
    if (!isDetails) {
      shakeWidth = 0.03;
      canvasWidth = 400;
      canvasHeight = 300;
    }
    if (canvasWidth >= maxMainWidth) {
      canvasWidth = maxMainWidth;
      canvasHeight = maxMainWidth * payloadHeight;
    }
    const camera = new PerspectiveCamera(
      fov,
      canvasHeight / canvasWidth,
      1,
      1000
    );
    camera.position.z = 1;

    // render init
    const renderer = new WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true
    });
    renderer.info.reset();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor("#1d1d1d", 0.0);
    renderer.setSize(canvasWidth, canvasHeight);

    // light
    const light = new AmbientLight(0xffffff, 1.0);
    scene.add(light);

    // object
    const loader = new TextureLoader();
    const texture = loader.load(`${img}`);
    texture.minFilter = NearestFilter;
    const material = new MeshPhongMaterial({
      map: texture
    });
    const geometry = new PlaneBufferGeometry(1, 1, 1, 1);
    const mesh = new Mesh(geometry, material);
    scene.add(mesh);

    // render neutral
    renderer.render(scene, camera);

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const shaders = {
      uniforms: {
        tDiffuse: {
          value: null
        },
        time: {
          type: "f",
          value: time
        },
        resolution: {
          type: "v2",
          value: new Vector2(window.innerWidth, window.innerHeight)
        },
        shakeWidth: {
          type: "f",
          value: shakeWidth
        }
      },
      vertexShader: vertex.default,
      fragmentShader: fragment.default
    };

    const customPass = new ShaderPass(shaders);
    customPass.renderToScreen = true;
    composer.addPass(customPass);

    // start animation
    composer.render();
    requestRef.current = window.requestAnimationFrame(() =>
      animate({ scene, composer, customPass })
    );

    if (isDetails)
      window.addEventListener("resize", () =>
        handleResize({ camera, renderer })
      );
  };

  // animate
  const requestRef = useRef(0);
  const animate = useCallback(
    ({ scene, composer, customPass }: AnimateParams) => {
      render({ scene, composer, customPass });
      requestRef.current = window.requestAnimationFrame(() =>
        animate({ scene, composer, customPass })
      );
    },
    []
  );
  useEffect(() => {
    return () => window.cancelAnimationFrame(requestRef.current);
  }, [animate]);

  // handle resize
  const handleResize = ({ camera, renderer }: HandleCameraAspectParams) => {
    let width = window.innerWidth;
    let height = width * payloadHeight;
    if (width >= maxMainWidth) {
      width = maxMainWidth;
      height = maxMainWidth * payloadHeight;
    }
    camera.aspect = height / width;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };
  useEffect(() => {
    return () => window.removeEventListener("resize", () => handleResize);
  });

  // render
  const render = ({ scene, composer, customPass }: RenderParams) => {
    // access object of scene
    const object = scene.children[0] as any;
    const sec = performance.now() / 1000;
    const pass = customPass as any;
    pass.uniforms.time.value = sec * 0.75;

    composer.render();
  };

  // create hover state
  const [isHovered, setIsHovered] = useState(false);
  // handle hover event
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // handle touch event
  const handleTouchStart = () => {
    setIsHovered(true);
  };
  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  return (
    <div>
      {isDetails && (
        <button className="ImagePostProcessClip" aria-label="Works Link Button">
          <canvas className="ImagePostProcessDetails" ref={onMainLoaded} />
        </button>
      )}
      {!isDetails && (
        <button className="ImagePostProcessClip" aria-label="Works Link Button">
          <canvas
            className={
              isHovered ? "ImagePostProcessHovered" : "ImagePostProcess"
            }
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            ref={onMainLoaded}
          />
          <img
            src={img}
            className={
              isHovered ? "ImagePostProcessImgHovered" : "ImagePostProcessImg"
            }
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            alt="media"
          />
        </button>
      )}
    </div>
  );
};

export default ImagePostProcess;
