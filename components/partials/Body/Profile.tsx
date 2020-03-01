import React from "react";

import "./Profile.scss";

const Profile: React.FC = () => (
  <div className="ProfileWrap">
    <div className="ProfileContentsWrap">
      <div className="ProfileImageWrap">
        <img
          className="ProfileImage"
          src={require("../../../public/static/icon.jpg")}
          alt="logo"
        />
      </div>
      <div className="ProfileDescriptionWrap">
        <div className="ProfileDescription">
          <p>Web developer & Designer & Track Maker</p>
          <p>Student of Information Science @ Ritsumeikan Univ.</p>
          <p>Web Front-end Engineer, Designer @ ElevenBack LLC.</p>
          <p>Web Engineer @ tambourine.inc</p>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
