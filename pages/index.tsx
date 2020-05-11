import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import Loading from "../components/common/Loading";
import Contents from "../components/partials/Home/Contents";

const Home: React.FC = () => (
  <>
    <Loading />
    <Contents />
  </>
);

export default Home;
