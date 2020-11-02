import React from "react";

import Details from "../../components/partials/Details/Details";
import { useRouter } from "next/router";

const DetailsHome = () => {
  const router = useRouter();
  const { name } = router.query;
  return <>{name !== undefined && <Details name={name} />}</>;
};

export default DetailsHome;
