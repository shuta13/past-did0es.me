import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import Loading from "../components/common/Loading";

// const MainNoSSR = dynamic(
//   () => import('../components/partials/Head/Main'),
//   { ssr: false }
// )

const ContentsNoSSR = dynamic(
  () => import("../components/partials/Home/Contents"),
  { ssr: false }
);

const Home: React.FC = () => (
  <>
    {/* <MainNoSSR /> */}
    <Loading />
    <ContentsNoSSR />
  </>
);

export default Home;
