import styles from "./Header.module.scss";
import React from "react";
import Router from "next/router";
import { sleep } from "./Menu";
import Link from "next/link";
import Image from "next/image";

export const Header: React.FC<{
  isRouteChange: boolean;
  resetActiveMenu: () => void;
}> = props => {
  const { isRouteChange, resetActiveMenu } = props;

  return (
    <div className={isRouteChange ? styles.clicked : styles.wrap}>
      <Link href="/">
        <a>
          <Image
            className={styles.icon}
            src="/icon.jpg"
            alt="Icon"
            width={40}
            height={40}
            onClick={resetActiveMenu}
          />
        </a>
      </Link>
    </div>
  );
};
