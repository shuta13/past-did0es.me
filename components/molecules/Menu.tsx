import styles from "./Menu.module.scss";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Modal } from "./Modal";

export const sleep = (duration?: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("::Woke::");
    }, duration ?? 1200);
  });
};

export const Menu: React.FC<{
  isRouteChange: boolean;
  isWorksActive: boolean;
  isContactActive: boolean;
}> = props => {
  const { isRouteChange, isWorksActive, isContactActive } = props;
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div className={isRouteChange ? styles.clicked : styles.wrap}>
        <button
          className={styles.button}
          onClick={() => setIsClicked(prevState => !prevState)}
        >
          <span className={isClicked ? styles.line_clicked : styles.line} />
        </button>
      </div>
      <Modal isClicked={isClicked} setIsClicked={setIsClicked} />
    </>
  );
};
