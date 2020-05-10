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
          <div style={{ textAlign: "center", fontSize: "16px" }}>Hirai Shuta / did0es</div>
          <div style={{ textAlign: "center" }}>Web Developer, Designer</div>
          <div>
            Student of Audio & Visual Media Technology Course, College of
            Information Science and Engineering, Ritsumeikan Univ.
          </div>
          <div>Entrusted FrontEnd Engineer, Designer @AkinaiOne</div>
          <div>Entrusted FrontEnd Engineer, Designer @ElevenBack LLC.</div>
          <div>Contracted Web Developer @tambourine.inc</div>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
