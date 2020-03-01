import React, { useState, useEffect } from "react";

const Loading: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {}, []);
  return (
    <div className={"LoadingWrap" + isLoaded ? "Loaded" : ""}>
      <div>now loading</div>
    </div>
  );
};

export default Loading;
