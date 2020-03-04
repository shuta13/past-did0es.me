import "./AppLoadingCube.scss";
import React from "react";

const AppLoading: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="AppLoadingCubeWrap">
      <div className="AppLoadingCubeTopWrap">
        <div className="AppLoadingCubeTop" />
      </div>
      <div className="AppLoadingCubeFrontWrap">
        <div className="AppLoadingCubeLeft" />
        <div className="AppLoadingCubeFront">{text}</div>
        <div className="AppLoadingCubeRight" />
      </div>
      <div className="AppLoadingCubeBottomWrap">
        <div className="AppLoadingCubeBottom" />
      </div>
      <div className="AppLoadingCubeBack" />
    </div>
  );
};

export default AppLoading;
