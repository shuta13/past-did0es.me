import styles from "./Header.module.scss";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { sleep } from "./Menu";
import Link from "next/link";

export const Header: React.FC<{
  setIsHeaderClicked: (isHeaderClicked: boolean) => void;
}> = props => {
  const { setIsHeaderClicked } = props;
  const router = useRouter();

  const _setIsHeaderClicked = () => setIsHeaderClicked(false);

  const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsHeaderClicked(true);
    sleep().then(() => {
      router.push("/");
    });
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", _setIsHeaderClicked);
    return () => router.events.off("routeChangeComplete", _setIsHeaderClicked);
  }, []);

  return (
    <div className={styles.wrap}>
      <a
        href="/"
        className={styles.text}
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleOnClick(e)}
      >
        did0es
      </a>
    </div>
  );
};
