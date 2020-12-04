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
          src="/icon.jpg"
          alt="Icon"
          width={48}
          height={48}
          onClick={resetActiveMenu}
        />
      </Link>
    </div>
  );
};
