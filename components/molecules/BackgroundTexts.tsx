import styles from "./BackgroundTexts.module.scss";
import React from "react";

interface Props {
  text: string;
  isRouteChange: boolean;
}

export const BackgroundTexts: React.FC<Props> = props => {
  const { text, isRouteChange } = props;
  return (
    <div className={styles.wrap}>
      <div className={styles.text}>{text}</div>
      <div className={styles.text}>{text}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};
