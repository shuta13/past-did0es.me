import styles from "./Header.module.scss";
import React from "react";
import Router from "next/router";
import { sleep } from "./Menu";
import Link from "next/link";

export const Header: React.FC<{
  isRouteChange: boolean;
  resetActiveMenu: () => void;
}> = props => {
  const { isRouteChange, resetActiveMenu } = props;

  return (
    <div className={isRouteChange ? styles.clicked : styles.wrap}>
      <Link href="/">
        <img
          className={styles.icon}
          src="/svg/circle.svg"
          alt="Icon"
          width={40}
          height={40}
          onClick={resetActiveMenu}
        />
      </Link>
    </div>
  );
};
