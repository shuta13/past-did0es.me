import styles from "./BackgroundTexts.module.scss";
import React from "react";

interface Props {
  svg: any;
  isRouteChange: boolean;
}

export const BackgroundTexts: React.FC<Props> = props => {
  const { svg, isRouteChange } = props;
  return (
    <div className={styles.wrap}>
      <img className={styles.svg} src={svg} />
      <img className={styles.svg} src={svg} />
      <img className={styles.svg} src={svg} />
    </div>
  );
};
