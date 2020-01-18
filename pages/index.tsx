import React from 'react'
import Head from 'next/head'

import Header from '../components/common/Header'
import Layout from '../components/common/Layout'
import Canvas from '../components/partials/Head/Canvas'

const Home: React.FC = () => (
  <Layout>
    <Head>
      <title>did0es.me</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header></Header>

    <Canvas></Canvas>

  </Layout>
)

export default Home