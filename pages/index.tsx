import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import Loading from "../components/common/Loading";

// const CanvasNoSSR = dynamic(
//   () => import('../components/partials/Head/Canvas'),
//   { ssr: false }
// )

const ContentsNoSSR = dynamic(
  () => import("../components/partials/Home/Contents"),
  { ssr: false }
);

const Home: React.FC = () => (
  <>
    {/* <CanvasNoSSR /> */}
    {process.env.NODE_ENV !== "development" ? <Loading /> : null}
    <ContentsNoSSR />
  </>
);

export default Home;
