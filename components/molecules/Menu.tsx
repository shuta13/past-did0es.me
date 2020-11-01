import "./Menu.scss";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Menu: React.FC<{
  setIsMenuClicked: (isMenuClicked: boolean) => void;
}> = props => {
  const { setIsMenuClicked } = props;
  const router = useRouter();

  const _setIsMenuClicked = () => setIsMenuClicked(false);

  const sleep = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1200);
    });
  };

  const handleOnClick = () => {
    setIsMenuClicked(true);
    sleep().then(() => {
      router.push("/works");
    });
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", _setIsMenuClicked);
    return () => router.events.off("routeChangeComplete", _setIsMenuClicked);
  }, []);

  return (
    <div className="MenuWrap">
      <a className="MenuPageName" onClick={handleOnClick}>
        Works
      </a>
      <Link href="/contact">
        <a className="MenuPageName">Contact</a>
      </Link>
    </div>
  );
};
