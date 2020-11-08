import Main from "../components/partials/Home/Main";
import React from "react";

import { ProfileSlide } from "../components/organisms/ProfileSlide";

const Home: React.FC<{
  isRouteChange: boolean;
}> = props => {
  const { isRouteChange } = props;
  return (
    <div className="container">
      {!isRouteChange && <Main />}
      <ProfileSlide />
      {/* <Profile /> */}
      {/* <Works /> */}
      {/* <Skills /> */}
      {/* <Social /> */}
      {/* <Copyright /> */}
    </div>
  );
};

export default Home;
