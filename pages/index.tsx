import React from "react";

import Loading from "../components/common/Loading";
import Contents from "../components/partials/Home/Contents";
import Head from "next/head";

const Home: React.FC = () => (
  <>
    <Contents />
    <Loading />
  </>
);

export default Home;
