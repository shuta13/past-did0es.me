import "./AppLoadingCube.scss";
import React from "react";

const AppLoading: React.FC<{ text: string }> = ({ text }) => {
  const map = Array.prototype.map;
  return (
    <div className="AppLoadingCubeWrap">
      <div className="AppLoadingCubeTopWrap">
        <div className="AppLoadingCubeTop" />
      </div>
      <div className="AppLoadingCubeFrontWrap">
        <div className="AppLoadingCubeLeft" />
        {map.call(`${text}`, (t, index) => {
          return (
            <div className={
              index === 1 || index === 4
                ? "AppLoadingCubeFrontSelected"
                : "AppLoadingCubeFront"
            } key={index}>
              <div className="AppLoadingCubeText">
                {t}
              </div>
            </div>
          );
        })}
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
