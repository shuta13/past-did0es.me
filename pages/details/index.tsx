import React from 'react'
import dynamic from 'next/dynamic'
import Layout from '../../components/common/Layout'
import Header from '../../components/common/Header'

const DetailsNoSSR = dynamic(
  () => import('../../components/partials/Details/Details'),
  { ssr: false }
)

const DetailsHome = () => {
  return (
    <Layout>
      <Header isDetails={true} />
      <DetailsNoSSR />
    </Layout>
  )
}

export default DetailsHome