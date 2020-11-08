import styles from "./Header.module.scss";
import React from "react";
import Router from "next/router";
import { sleep } from "./Menu";
import Link from "next/link";

export const Header: React.FC<{
  isRouteChange: boolean;
}> = props => {
  const { isRouteChange } = props;

  return (
    <div className={isRouteChange ? styles.clicked : styles.wrap}>
      <Link href="/">
        <a className={styles.text}>did0es</a>
      </Link>
    </div>
  );
};
