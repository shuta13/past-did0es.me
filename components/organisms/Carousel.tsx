import React, { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.scss";
import { Slide } from "../molecules/Slide";
import response from "../../pages/api/response.json";
import { Pagination } from "../molecules/Pagination";

const workNames = [];
response.map(res => workNames.push(res.info.title));

export type Work = typeof response[0];

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
    response.map(res => {
      if (res.id === currentSlideNumber - 1) {
        setCurrentSlideNumber(res.id);
        slideWidth !== 0 && setTranslateXValue(slideWidth * (res.id - 1));
      }
    });
  };

  const handleOnClickNext = () => {
    response.map(res => {
      if (res.id === currentSlideNumber + 1) {
        setCurrentSlideNumber(res.id);
        setTranslateXValue(
          translateXValue === 0 && slideWidth !== 0
            ? slideWidth
            : slideWidth * (res.id - 1)
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
        {response.map(res => (
          <Slide
            work={res}
            key={res.id}
            style={{
              transform: `translateX(${100 * (res.id - 1)}%) scale3d(${
                res.id === currentSlideNumber ? 1.1 : 0.9
              }, ${res.id === currentSlideNumber ? 1.1 : 0.9}, 1)`,
              filter:
                res.id === currentSlideNumber
                  ? "brightness(1)"
                  : "brightness(0.3)",
              pointerEvents: res.id === currentSlideNumber ? "auto" : "none"
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
