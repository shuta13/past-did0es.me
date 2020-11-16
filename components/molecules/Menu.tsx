import styles from "./Menu.module.scss";
import React, { useEffect, useState } from "react";
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
  isWorksActive: boolean;
  isContactActive: boolean;
}> = props => {
  const { isRouteChange, isWorksActive, isContactActive } = props;

  return (
    <div className={isRouteChange ? styles.clicked : styles.wrap}>
      <Link href="/works">
        <a className={isWorksActive ? styles.text_active : styles.text}>
          WORKS
        </a>
      </Link>
      <Link href="/contact">
        <a className={isContactActive ? styles.text_active : styles.text}>
          CONTACT
        </a>
      </Link>
    </div>
  );
};
