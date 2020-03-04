import "./AppLoading.scss";
import React from "react";
import AppLoadingText from "./AppLoadingText";
import AppLoadingTop from "./AppLoadingTop";
import AppLoadingBottom from "./AppLoadingBottom";

const AppLoading: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="AppLoadingWrap">
      <AppLoadingTop />
      <AppLoadingText text={text} />
      <AppLoadingBottom />
    </div>
  );
};

export default AppLoading;
