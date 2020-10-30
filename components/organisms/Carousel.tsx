import React, { useState } from "react";
import "./Carousel.scss";
import { Slide } from "../molecules/Slide";
import works from "../../public/json/works.json";
import { Pagination } from "../molecules/Pagination";

const workNames = [];
works.map(work => workNames.push(work.info.title));

const AppSlide: React.FC<{
  work: typeof works[0];
  slideStyle: React.CSSProperties;
}> = props => {
  const { work, slideStyle } = props;
  return <Slide work={work} key={work.id} style={slideStyle} />;
};

export const Carousel: React.FC = () => {
  const [currentSlideNumber, setCurrentSlideNumber] = useState(1);
  const [translateXValue, setTranslateXValue] = useState(0);

  // Slide の 幅 + 3em 分動かしたい

  const handleOnClickPrev = () => {
    works.map(work => {
      if (work.id === currentSlideNumber - 1) {
        setCurrentSlideNumber(work.id);
        setTranslateXValue((1024 + 16 * 3) * (work.id - 1));
      }
    });
  };

  const handleOnClickNext = () => {
    works.map(work => {
      if (work.id === currentSlideNumber + 1) {
        setCurrentSlideNumber(work.id);
        console.log(window.innerWidth * 0.046 * work.id);
        setTranslateXValue(
          translateXValue === 0
            ? 1024 + 16 * 3
            : (1024 + 16 * 3) * (work.id - 1)
        );
      }
    });
  };

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
              transform: `translateX(${100 * (work.id - 1)}%)`,
              filter: "brightness(0.9)"
            }}
            key={work.id}
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
