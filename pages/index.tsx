import Main from "../components/partials/Home/Main";
import React from "react";

import { ProfileSlide } from "../components/organisms/ProfileSlide";

const Home: React.FC = () => (
  <div className="container">
    <Main />
    <ProfileSlide />
    {/* <Profile /> */}
    {/* <Works /> */}
    {/* <Skills /> */}
    {/* <Social /> */}
    {/* <Copyright /> */}
  </div>
);

export default Home;
