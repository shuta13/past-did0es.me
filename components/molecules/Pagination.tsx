import styles from "./Pagination.module.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

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
    <>
      {currentSlideNumber !== 1 && (
        <button className={styles.button_left} onClick={handleOnClickPrev}>
          <FontAwesomeIcon icon={faAngleLeft} size="lg" color="#1d1d1d" />
        </button>
      )}
      {/* <div
        className={styles.text}
      >{`${currentSlideNumber} / ${totalNumber}`}</div> */}
      {currentSlideNumber !== totalNumber && (
        <button className={styles.button_right} onClick={handleOnClickNext}>
          <FontAwesomeIcon icon={faAngleRight} size="lg" color="1d1d1d" />
        </button>
      )}
    </>
  );
};
