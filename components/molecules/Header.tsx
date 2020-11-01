import "./Header.scss";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { sleep } from "./Menu";

export const Header: React.FC<{
  setIsHeaderClicked: (isHeaderClicked: boolean) => void;
}> = props => {
  const { setIsHeaderClicked } = props;
  const router = useRouter();

  const _setIsHeaderClicked = () => setIsHeaderClicked(false);

  const handleOnClick = () => {
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
    <div className="HeaderWrap">
      <a className="HeaderText" onClick={() => handleOnClick()}>
        did0es
      </a>
    </div>
  );
};
