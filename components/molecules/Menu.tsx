import styles from "./Menu.module.scss";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const pageNames = ["works", "contact"];

export const sleep = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 1200);
  });
};

export const Menu: React.FC<{
  isClicked: boolean;
  isMenuClicked: boolean;
  isHeaderClicked: boolean;
  setIsMenuClicked: (isMenuClicked: boolean) => void;
}> = props => {
  const { isClicked, isHeaderClicked, isMenuClicked, setIsMenuClicked } = props;
  const router = useRouter();

  const _setIsMenuClicked = () => setIsMenuClicked(false);

  const handleOnClick = (
    pageName: string,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    setIsMenuClicked(true);
    sleep().then(() => {
      router.push(`/${pageName}`);
    });
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", _setIsMenuClicked);
    return () => router.events.off("routeChangeComplete", _setIsMenuClicked);
  }, []);

  return (
    <div
      className={
        isClicked || isHeaderClicked || isMenuClicked
          ? styles.clicked
          : styles.wrap
      }
    >
      {pageNames.map(pageName => (
        <a
          className={styles.text}
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
            handleOnClick(pageName, e)
          }
          key={pageName}
          href={pageName}
        >
          {`${pageName}`.toUpperCase()}
        </a>
      ))}
      {/* <a className="MenuPageName" onClick={handleOnClick}>
        Works
      </a>
      <Link href="/contact">
        <a className="MenuPageName">Contact</a>
      </Link> */}
    </div>
  );
};
