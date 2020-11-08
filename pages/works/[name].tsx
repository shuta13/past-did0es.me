import React from "react";

import Details from "../../components/partials/Details/Details";
import { useRouter } from "next/router";

const DetailsHome: React.FC<{
  isRouteChange: boolean;
}> = props => {
  const router = useRouter();
  const { isRouteChange } = props;
  const { name } = router.query;
  return (
    <>
      {name !== undefined && (
        <Details name={name} isRouteChange={isRouteChange} />
      )}
    </>
  );
};

export default DetailsHome;
