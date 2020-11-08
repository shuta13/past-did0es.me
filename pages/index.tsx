import Main from "../components/partials/Home/Main";
import React from "react";

import { ProfileSlide } from "../components/organisms/ProfileSlide";

const Home: React.FC<{
  isHeaderClicked: boolean;
  isMenuClicked: boolean;
}> = props => {
  const { isHeaderClicked, isMenuClicked } = props;
  return (
    <div className="container">
      {!isHeaderClicked && !isMenuClicked && <Main />}
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
