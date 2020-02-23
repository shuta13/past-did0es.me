import React from 'react'
import Head from 'next/head'
import DetailsImage from '../../common/DetailsImage'
import DetailsInfo from '../../common/DetailsInfo'

import development from '../../../public/static/json/development.json'
import design from '../../../public/static/json/design.json'
import trackMaking from '../../../public/static/json/trackMaking.json'
import './Details.scss'

const Details: React.FC = () => {
  const queryTitle = new URL(window.location.href).searchParams.get('title')
  const worksAll = development.concat(design, trackMaking)
  let worksTitle = ""
  let img = ""
  let info = {
    "title": "",
    "date": "",
    "tags": "",
    "desc": "",
    "link": ""
  }
  worksAll.map((works) => {
    if (works.img.split('.')[0] === queryTitle) {
      worksTitle = works.info.title
      img = works.img
      info = works.info
    }
  })


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
        <meta property="og:url" content={`https://did0es.me/details?title=${img.split('.')[0]}`}/>
        <meta property="og:title" content="APOSTRO"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="og:description" content={"APOSTRO - " + worksTitle}/>
        <meta property="og:image" content="https://did0es.me/static/ogp.jpg" />
      </Head>

      <div className="DetailsContentsWrap">
        <div className="DetailsContents">
          <DetailsImage img={`/static/works/${img}`} />
          <DetailsInfo info={info} />
        </div>
      </div>
    </div>
  )
}

export default Details