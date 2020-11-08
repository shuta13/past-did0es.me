import styles from "./Menu.module.scss";
import React from "react";
import Link from "next/link";

export const sleep = (duration?: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, duration ?? 1200);
  });
};

export const Menu: React.FC<{
  isRouteChange: boolean;
}> = props => {
  const { isRouteChange } = props;

  return (
    <div className={isRouteChange ? styles.clicked : styles.wrap}>
      <Link href="/works">
        <a className={styles.text}>WORKS</a>
      </Link>
      <Link href="/contact">
        <a className={styles.text}>CONTACT</a>
      </Link>
    </div>
  );
};
