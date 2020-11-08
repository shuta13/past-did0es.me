import React from "react";

import Details from "../../components/partials/Details/Details";
import { useRouter } from "next/router";

const DetailsHome: React.FC<{
  isHeaderClicked: boolean;
  isMenuClicked: boolean;
  setIsClicked: (isClicked: boolean) => void;
}> = props => {
  const router = useRouter();
  const { isHeaderClicked, isMenuClicked, setIsClicked } = props;
  const { name } = router.query;
  return (
    <>
      {name !== undefined && (
        <Details
          name={name}
          isHeaderClicked={isHeaderClicked}
          isMenuClicked={isMenuClicked}
          setIsClicked={setIsClicked}
        />
      )}
    </>
  );
};

export default DetailsHome;
