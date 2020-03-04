import React from "react";

import "./AppLoadingText.scss";

const AppLoadingText: React.FC<{ text: string }> = ({ text }) => {
  return <div className="AppLoadingTextWrap">{text}</div>;
};

export default AppLoadingText;
