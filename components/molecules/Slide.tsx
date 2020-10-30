import "./Slide.scss";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import works from "../../public/json/works.json";

interface Props {
  work: typeof works[0];
  style: React.CSSProperties;
  setSlideWidth: (slideWidth: number) => void;
  setIsSwipeSlideToLeft: (isSwipeSlideToLeft: boolean) => void;
  setIsSwipeSlideToRight: (isSwipeSlideToRight: boolean) => void;
}

export const Slide: React.FC<Props> = props => {
  const {
    work,
    style,
    setSlideWidth,
    setIsSwipeSlideToLeft,
    setIsSwipeSlideToRight
  } = props;
  const name = work?.img.split(".")[0];
  const [startMousePosition, setStartMousePosition] = useState(0);
  const [isFirstDragCaptured, setIsFirstDragCaptured] = useState(false);

  const slideRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    slideRef != null &&
      slideRef.current?.clientWidth != null &&
      setSlideWidth(slideRef.current?.clientWidth);
  }, [slideRef]);

  const handleOnDragStart = (e: React.MouseEvent) => {
    setIsFirstDragCaptured(true);
    setStartMousePosition(e.clientX);
  };

  const handleOnDragCapture = (e: React.MouseEvent) => {
    if (startMousePosition - e.clientX > 100 && isFirstDragCaptured) {
      setIsSwipeSlideToLeft(true);
      setIsFirstDragCaptured(false);
    } else if (startMousePosition - e.clientX < -100 && isFirstDragCaptured) {
      setIsSwipeSlideToRight(true);
      setIsFirstDragCaptured(false);
    }
  };

  return (
    <Link href={`works/details/${name}`}>
      <a
        className="SlideWrap"
        style={style}
        ref={slideRef}
        onDragCapture={handleOnDragCapture}
        onDragStart={handleOnDragStart}
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
    </Link>
  );
};
