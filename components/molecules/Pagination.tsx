import styles from "./Pagination.module.scss";
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
    <div className={styles.wrap}>
      {currentSlideNumber !== 1 ? (
        <button
          className={styles.button}
          onClick={handleOnClickPrev}
        >{`<`}</button>
      ) : (
        <button className={styles.button} style={{ pointerEvents: "none" }} />
      )}
      <div
        className={styles.text}
      >{`${currentSlideNumber} / ${totalNumber}`}</div>
      {currentSlideNumber !== totalNumber ? (
        <button
          className={styles.button}
          onClick={handleOnClickNext}
        >{`>`}</button>
      ) : (
        <button className={styles.button} style={{ pointerEvents: "none" }} />
      )}
    </div>
  );
};
