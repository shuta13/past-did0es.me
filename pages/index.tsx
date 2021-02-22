import Main from "../components/partials/Home/Main";
import React from "react";

import { ProfileSlide } from "../components/organisms/ProfileSlide";

const Home: React.FC<{
  isLoaded: boolean;
  isRouteChange: boolean;
}> = (props) => {
  const { isLoaded, isRouteChange } = props;
  return (
    <div className="container">
      {!isRouteChange && <Main />}
      <ProfileSlide isLoaded={isLoaded} />
    </div>
  );
};

export default Home;
