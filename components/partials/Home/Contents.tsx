import React, { useRef, useEffect } from "react";

import ContentsForPC from "./ContentsForPC";
import ContentsForPhone from "./ContentsForPhone";

const Contents = () => {
  const width = window.innerWidth;
  return (
    <div>
      {width > 615 && <ContentsForPC />}
      {width <= 615 && <ContentsForPhone />}
    </div>
  );
};

export default Contents;
