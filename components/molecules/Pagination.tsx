import "./Pagination.scss";
import React from "react";

interface Props {
  currentSlideNumber: number;
  totalNumber: number;
  handleOnClickPrev: () => void;
  handleOnClickNext: () => void;
}

export const Pagination: React.FC<Props> = props => {
  const {
    currentSlideNumber,
    totalNumber,
    handleOnClickPrev,
    handleOnClickNext
  } = props;
  return (
    <div className="PaginationWrap">
      {currentSlideNumber !== 1 ? (
        <button
          className="PaginationButton"
          onClick={handleOnClickPrev}
        >{`<`}</button>
      ) : (
        <button
          className="PaginationButton"
          style={{ pointerEvents: "none" }}
        />
      )}
      <div className="PaginationNumber">{`${currentSlideNumber} / ${totalNumber}`}</div>
      {currentSlideNumber !== totalNumber ? (
        <button
          className="PaginationButton"
          onClick={handleOnClickNext}
        >{`>`}</button>
      ) : (
        <button
          className="PaginationButton"
          style={{ pointerEvents: "none" }}
        />
      )}
    </div>
  );
};
