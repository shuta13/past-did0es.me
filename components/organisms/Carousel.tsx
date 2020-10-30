import React, { useEffect, useRef, useState } from "react";
import "./Carousel.scss";
import { Slide } from "../molecules/Slide";
import works from "../../public/json/works.json";
import { Pagination } from "../molecules/Pagination";

const workNames = [];
works.map(work => workNames.push(work.info.title));

const AppSlide: React.FC<{
  work: typeof works[0];
  slideStyle: React.CSSProperties;
  setSlideWidth: (slideNumber: number) => void;
  setIsSwipeSlideToLeft: (isSwipeSlideToLeft: boolean) => void;
  setIsSwipeSlideToRight: (isSwipeSlideToRight: boolean) => void;
}> = props => {
  const {
    work,
    slideStyle,
    setSlideWidth,
    setIsSwipeSlideToLeft,
    setIsSwipeSlideToRight
  } = props;
  return (
    <Slide
      work={work}
      key={work.id}
      style={slideStyle}
      setSlideWidth={setSlideWidth}
      setIsSwipeSlideToLeft={setIsSwipeSlideToLeft}
      setIsSwipeSlideToRight={setIsSwipeSlideToRight}
    />
  );
};

export const Carousel: React.FC = () => {
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
        className="CarouselWrap"
        style={{ transform: `translateX(-${translateXValue}px)` }}
      >
        {works.map(work => (
          <AppSlide
            work={work}
            slideStyle={{
              transform: `translateX(${100 * (work.id - 1)}%) scale3d(${
                work.id === currentSlideNumber ? 1 : 0.9
              }, ${work.id === currentSlideNumber ? 1 : 0.9}, 1)`,
              filter:
                work.id === currentSlideNumber
                  ? "brightness(1)"
                  : "brightness(0.3)"
            }}
            key={work.id}
            setSlideWidth={setSlideWidth}
            setIsSwipeSlideToLeft={setIsSwipeSlideToLeft}
            setIsSwipeSlideToRight={setIsSwipeSlideToRight}
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