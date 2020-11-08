import styles from "./Slide.module.scss";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Work } from "../organisms/Carousel";
import { Modal } from "./Modal";
import { useRouter } from "next/router";
import { sleep } from "./Menu";

interface Props {
  work: Work;
  style: React.CSSProperties;
  setSlideWidth: (slideWidth: number) => void;
  setIsSwipeSlideToLeft: (isSwipeSlideToLeft: boolean) => void;
  setIsSwipeSlideToRight: (isSwipeSlideToRight: boolean) => void;
  setIsShowModal: (isShowModal: boolean) => void;
  isShowModal: boolean;
  setIsClicked: (isClicked: boolean) => void;
}

export const Slide: React.FC<Props> = props => {
  const {
    work,
    style,
    setSlideWidth,
    setIsSwipeSlideToLeft,
    setIsSwipeSlideToRight,
    setIsShowModal,
    isShowModal,
    setIsClicked
  } = props;
  const [startMousePosition, setStartMousePosition] = useState(0);
  const [isFirstDragCaptured, setIsFirstDragCaptured] = useState(false);

  const slideRef = useRef<HTMLAnchorElement>(null);

  const router = useRouter();

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
    <a
      href={`/works/${work.pathname}`}
      className={styles.wrap}
      style={style}
      ref={slideRef}
      onDragCapture={handleOnDragCapture}
      onDragStart={handleOnDragStart}
      onTouchMove={handleOnTouchMove}
      onTouchStart={handleOnTouchStart}
      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsShowModal(true);
        setIsClicked(true);
        sleep().then(() => {
          router.push(`/works/${work.pathname}`);
        });
      }}
    >
      <div className={styles.content}>
        <div className={styles.overlay} />
        <img
          className={styles.image}
          src={require(`../../public/works/${work?.img}`)}
          alt="Works Image"
        />
      </div>
      <div className={styles.date}>{work?.info.date}</div>
      <div className={styles.title}>{work?.info.title}</div>
    </a>
  );
};
