import styles from "./Pagination.module.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faCaretLeft,
  faCaretRight
} from "@fortawesome/free-solid-svg-icons";
import { TextAnimation } from "./TextAnimation";

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
      <button
        className={
          currentSlideNumber !== 1
            ? styles.button_left
            : styles.button_left_disable
        }
        onClick={handleOnClickPrev}
      >
        <TextAnimation
          isMoveOverlay={true}
          text="PREV"
          fontSize={2.5}
          textAlign="right"
        />
      </button>
      <button
        className={
          currentSlideNumber !== totalNumber
            ? styles.button_right
            : styles.button_right_disable
        }
        onClick={handleOnClickNext}
      >
        <TextAnimation
          isMoveOverlay={true}
          text="NEXT"
          fontSize={2.5}
          textAlign="left"
        />
      </button>
    </>
  );
};
