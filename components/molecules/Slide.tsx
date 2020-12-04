import styles from "./Slide.module.scss";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Work } from "../organisms/Carousel";
import { TextAnimation } from "./TextAnimation";

interface Props {
  work: Work;
  style: React.CSSProperties;
  setSlideWidth: (slideWidth: number) => void;
  setIsSwipeSlideToLeft: (isSwipeSlideToLeft: boolean) => void;
  setIsSwipeSlideToRight: (isSwipeSlideToRight: boolean) => void;
  currentSlideNumber: number;
  setIsMenuReset: (isMenuReset: boolean) => void;
}

export const Slide: React.FC<Props> = props => {
  const {
    work,
    style,
    setSlideWidth,
    setIsSwipeSlideToLeft,
    setIsSwipeSlideToRight,
    currentSlideNumber,
    setIsMenuReset
  } = props;
  const [startMousePosition, setStartMousePosition] = useState(0);
  const [isFirstDragCaptured, setIsFirstDragCaptured] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const slideRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    return () =>
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
  }, []);

  useEffect(() => {
    slideRef.current?.clientWidth != null &&
      setSlideWidth(slideRef.current?.clientWidth);
  }, [slideRef]);

  const handleOnDragStart = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsFirstDragCaptured(true);
    setStartMousePosition(e.clientX);
  };

  const handleOnDragCapture = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (startMousePosition - e.clientX > 60 && isFirstDragCaptured) {
      setIsSwipeSlideToLeft(true);
      setIsFirstDragCaptured(false);
    } else if (startMousePosition - e.clientX < -60 && isFirstDragCaptured) {
      setIsSwipeSlideToRight(true);
      setIsFirstDragCaptured(false);
    }
  };

  const handleOnTouchStart = (e: React.TouchEvent<HTMLAnchorElement>) => {
    setIsFirstDragCaptured(true);
    setStartMousePosition(e.touches[0].clientX);
  };

  const handleOnTouchMove = (e: React.TouchEvent<HTMLAnchorElement>) => {
    if (startMousePosition - e.touches[0].clientX > 60 && isFirstDragCaptured) {
      setIsSwipeSlideToLeft(true);
      setIsFirstDragCaptured(false);
    } else if (
      startMousePosition - e.touches[0].clientX < -60 &&
      isFirstDragCaptured
    ) {
      setIsSwipeSlideToRight(true);
      setIsFirstDragCaptured(false);
    }
  };

  return (
    <Link href="/works/[name]" as={`/works/${work.pathname}`}>
      <a
        className={styles.wrap}
        style={style}
        ref={slideRef}
        onDragCapture={handleOnDragCapture}
        onDragStart={handleOnDragStart}
        onTouchMove={handleOnTouchMove}
        onTouchStart={handleOnTouchStart}
        onClick={() => setIsMenuReset(true)}
      >
        <div className={styles.content}>
          <div className={styles.overlay} />
          <img
            className={styles.image}
            src={require(`../../public/works/${work?.img}`)}
            alt="Works Image"
          />
        </div>
        <div className={styles.date_wrap}>
          <TextAnimation
            isMoveOverlay={work.id === currentSlideNumber}
            text={work?.info.date}
            fontSize={2}
          />
        </div>
        <div className={styles.title_wrap}>
          <TextAnimation
            isMoveOverlay={work.id === currentSlideNumber}
            text={work?.info.title.toUpperCase()}
            fontSize={windowWidth > 768 ? 12 : windowWidth * 0.012}
          />
        </div>
        <div className={styles.tags_wrap}>
          <TextAnimation
            isMoveOverlay={work.id === currentSlideNumber}
            text={work?.info.tags}
            fontSize={3}
            textAlign="left"
          />
        </div>
        {/* <div className={styles.date}>{work?.info.date}</div>
        <div className={styles.title}>{work?.info.title}</div> */}
      </a>
    </Link>
  );
};
