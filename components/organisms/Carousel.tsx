import React, { useState } from "react";
import "./Carousel.scss";
import { Slide } from "../molecules/Slide";
import works from "../../public/json/works.json";
import { Pagination } from "../molecules/Pagination";

const workNames = [];
works.map(work => workNames.push(work.info.title));

export const Carousel: React.FC = () => {
  const [currentSlideName, setCurrentSlideName] = useState("vue-tsx-keyframes");
  const [currentSlideNumber, setCurrentSlideNumber] = useState(1);

  const handleOnClickPrev = () => {
    works.map(work => {
      if (work.id === currentSlideNumber - 1) {
        setCurrentSlideName(work.info.title);
        setCurrentSlideNumber(work.id);
      }
    });
  };

  const handleOnClickNext = () => {
    works.map(work => {
      if (work.id === currentSlideNumber + 1) {
        setCurrentSlideName(work.info.title);
        setCurrentSlideNumber(work.id);
      }
    });
  };

  return (
    <div className="CarouselWrap">
      <>
        {works.map(work =>
          work.info.title === currentSlideName ? (
            <Slide work={work} key={work.id} />
          ) : null
        )}
        <Pagination
          currentSlideNumber={currentSlideNumber}
          totalNumber={workNames.length}
          handleOnClickPrev={handleOnClickPrev}
          handleOnClickNext={handleOnClickNext}
        />
      </>
    </div>
  );
};
