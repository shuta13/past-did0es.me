import "./Slide.scss";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Work } from "../organisms/Carousel";
import { Modal } from "./Modal";

interface Props {
  work: Work;
  style: React.CSSProperties;
  setSlideWidth: (slideWidth: number) => void;
  setIsSwipeSlideToLeft: (isSwipeSlideToLeft: boolean) => void;
  setIsSwipeSlideToRight: (isSwipeSlideToRight: boolean) => void;
  setIsShowModal: (isShowModal: boolean) => void;
  isShowModal: boolean;
}

export const Slide: React.FC<Props> = props => {
  const {
    work,
    style,
    setSlideWidth,
    setIsSwipeSlideToLeft,
    setIsSwipeSlideToRight,
    setIsShowModal,
    isShowModal
  } = props;
  const [startMousePosition, setStartMousePosition] = useState(0);
  const [isFirstDragCaptured, setIsFirstDragCaptured] = useState(false);

  const slideRef = useRef<HTMLAnchorElement>(null);

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
        className="SlideWrap"
        style={style}
        ref={slideRef}
        onDragCapture={handleOnDragCapture}
        onDragStart={handleOnDragStart}
        onTouchMove={handleOnTouchMove}
        onTouchStart={handleOnTouchStart}
        onClick={() => setIsShowModal(true)}
      >
        <div className="SlideContent">
          <div className="SlideWorkOverlay" />
          <div className="SlideWorkInfo">
            <div className="SlideWorkDate">{work?.info.date}</div>
            <div className="SlideWorkTitle">{work?.info.title}</div>
          </div>
          <img
            className="SlideImage"
            src={require(`../../public/works/${work?.img}`)}
            alt="Works Image"
          />
        </div>
      </a>
      {/* {isShowModal && (
        <Modal work={work} style={style} setIsShowModal={setIsShowModal} />
      )} */}
    </Link>
  );
};
