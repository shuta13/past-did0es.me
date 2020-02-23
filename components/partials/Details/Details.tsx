import React from 'react'
import Head from 'next/head'
import DetailsImage from '../../common/DetailsImage'
import DetailsInfo from '../../common/DetailsInfo'
import DetailsDescription from '../../common/DetailsDescription'

import './Details.scss'

const Details: React.FC = () => {
  // will coming props values
  const worksTitle = 'garelly'
  const img = require('../../../public/static/works/garelly.jpg')
  const info = {
    title: 'garelly',
    date: '2020/02/23',
    tags: 'website'
  }
  const desc = 'ファックファックファック卍'

  return (
    <div>
      <Head>
        <title>APOSTRO - {worksTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Poiret+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Cinzel+Decorative&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Noto+Serif+JP&display=swap" rel="stylesheet" />

        <meta name="description" content={"APOSTRO - " + worksTitle}/>
        <meta property="og:site_name" content={"APOSTRO - " + worksTitle}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://did0es.me/details"/>
        <meta property="og:title" content="APOSTRO"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="og:description" content={"APOSTRO - " + worksTitle}/>
        <meta property="og:image" content="https://did0es.me/static/ogp.jpg" />
      </Head>

      <div className="DetailsContentsWrap">
        <DetailsImage img={img} />
        <DetailsInfo info={info} />
        <DetailsDescription desc={desc} />
      </div>
    </div>
  )
}

export default Details