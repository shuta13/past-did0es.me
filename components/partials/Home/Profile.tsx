import React from "react";

import "./Profile.scss";
import AppTitle from "../../common/AppTitle";

const Profile: React.FC = () => (
  <div className="ProfileWrap">
    <div className="ProfileClip">
      <AppTitle title="- Profile -" />
      <div className="ProfileImageWrap">
        <img
          className="ProfileImage"
          src={require("../../../public/icon.jpg")}
          alt="logo"
        />
      </div>
      <div className="ProfileDescriptionWrap">
        <div className="ProfileDescription">
          <p>Web developer & Designer</p>
          <p>
            Student of Audio & Visual Media Technology Course, College of
            Information Science and Engineering, Ritsumeikan Univ.
          </p>
          <p>Entrusted FrontEnd Engineer, Designer @AkinaiOne</p>
          <p>Entrusted FrontEnd Engineer, Designer @ElevenBack LLC.</p>
          <p>Contracted Web Developer @tambourine.inc</p>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
