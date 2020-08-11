import "./LoadingBlinder.scss";
import React from "react";

const LoadingBlinder: React.FC<{ isClicked: boolean }> = ({ isClicked }) => {
  return <div className={isClicked ? "LoadingBlinderOn" : "LoadingBlinder"} />;
};

export default LoadingBlinder;
