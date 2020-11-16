import styles from "./Header.module.scss";
import React from "react";
import Router from "next/router";
import { sleep } from "./Menu";
import Link from "next/link";

export const Header: React.FC<{
  isRouteChange: boolean;
  setIsMenuReset: (isMenuReset: boolean) => void;
}> = props => {
  const { isRouteChange, setIsMenuReset } = props;

  return (
    <div className={isRouteChange ? styles.clicked : styles.wrap}>
      <Link href="/">
        <img
          className={styles.icon}
          src="/icon.jpg"
          alt="Icon"
          width={56}
          height={56}
          onClick={() => setIsMenuReset(true)}
        />
      </Link>
    </div>
  );
};
