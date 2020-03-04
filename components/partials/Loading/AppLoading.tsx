import "./AppLoading.scss";
import React from "react";
import AppLoadingText from "./AppLoadingText";

const AppLoading: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="AppLoadingWrap">
      <AppLoadingText text={text} />
    </div>
  );
};

export default AppLoading;
