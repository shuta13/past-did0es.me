import "./AppLoadingCube.scss";
import React from "react";

const AppLoading: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="AppLoadingCubeWrap">
      <div className="AppLoadingCubeTop" />
      <div className="AppLoadingCubeFront">{text}</div>
      <div className="AppLoadingCubeBottom" />
      <div className="AppLoadingCubeBack" />
      <div className="AppLoadingCubeLeft" />
      <div className="AppLoadingCubeRight" />
    </div>
  );
};

export default AppLoading;
