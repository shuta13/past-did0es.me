import React from "react";
import dynamic from "next/dynamic";
import Header from "../../components/common/Header";

const DetailsNoSSR = dynamic(
  () => import("../../components/partials/Details/Details"),
  { ssr: false }
);

const DetailsHome = () => {
  return (
    <>
      <Header isDetails={true} />
      <DetailsNoSSR />
    </>
  );
};

export default DetailsHome;
