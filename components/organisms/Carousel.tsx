import React, { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.scss";
import { Slide } from "../molecules/Slide";
import works from "../../public/json/works.json";
import { Pagination } from "../molecules/Pagination";

const workNames = [];
works.map(work => workNames.push(work.info.title));

export type Work = typeof works[0];

export const Carousel: React.FC<{
  setIsMenuReset: (setIsMenuReset: boolean) => void;
}> = props => {
  const { setIsMenuReset } = props;
  const [currentSlideNumber, setCurrentSlideNumber] = useState(1);
  const [translateXValue, setTranslateXValue] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [isSwipeSlideToLeft, setIsSwipeSlideToLeft] = useState(false);
  const [isSwipeSlideToRight, setIsSwipeSlideToRight] = useState(false);

  const handleOnClickPrev = () => {
    works.map(work => {
      if (work.id === currentSlideNumber - 1) {
        setCurrentSlideNumber(work.id);
        slideWidth !== 0 && setTranslateXValue(slideWidth * (work.id - 1));
      }
    });
  };

  const handleOnClickNext = () => {
    works.map(work => {
      if (work.id === currentSlideNumber + 1) {
        setCurrentSlideNumber(work.id);
        setTranslateXValue(
          translateXValue === 0 && slideWidth !== 0
            ? slideWidth
            : slideWidth * (work.id - 1)
        );
      }
    });
  };

  useEffect(() => {
    if (isSwipeSlideToLeft) {
      handleOnClickNext();
      setIsSwipeSlideToLeft(false);
    }
  }, [isSwipeSlideToLeft]);

  useEffect(() => {
    if (isSwipeSlideToRight) {
      handleOnClickPrev();
      setIsSwipeSlideToRight(false);
    }
  }, [isSwipeSlideToRight]);

  return (
    <>
      <div
        className={styles.wrap}
        style={{ transform: `translateX(-${translateXValue}px)` }}
      >
        {works.map(work => (
          <Slide
            work={work}
            key={work.id}
            style={{
              transform: `translateX(${100 * (work.id - 1)}%) scale3d(${
                work.id === currentSlideNumber ? 1.1 : 0.9
              }, ${work.id === currentSlideNumber ? 1.1 : 0.9}, 1)`,
              filter:
                work.id === currentSlideNumber
                  ? "brightness(1)"
                  : "brightness(0.3)",
              pointerEvents: work.id === currentSlideNumber ? "auto" : "none"
            }}
            setSlideWidth={setSlideWidth}
            setIsSwipeSlideToLeft={setIsSwipeSlideToLeft}
            setIsSwipeSlideToRight={setIsSwipeSlideToRight}
            currentSlideNumber={currentSlideNumber}
            setIsMenuReset={setIsMenuReset}
          />
        ))}
      </div>
      <Pagination
        currentSlideNumber={currentSlideNumber}
        totalNumber={workNames.length}
        handleOnClickPrev={handleOnClickPrev}
        handleOnClickNext={handleOnClickNext}
      />
    </>
  );
};
