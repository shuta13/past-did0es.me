import React from 'react'
import Link from 'next/link'
import './AppWorks.scss'

import ImageCanvas from '../../common/ImageCanvas'

const AppWorks: React.FC<{ img: string, title: string, desc: string, link?: string, subDesc?: string }> = ({ img, title, desc, link, subDesc }) => {
  const width = window.innerWidth
  return (
    <div className="AppWorksWrap">
      <div className="AppWorksImageWrap">
        <Link href="/details">
          <a className="AppWorksImageClip">
            { width > 615 && <ImageCanvas img={img} /> }
            { width <= 615 && <img src={img} className="AppWorksImage" /> }
          </a>
        </Link>
      </div>
      <div className="AppWorksTitleWrap">
        <div className="AppWorksTitle">
          {title}
        </div>
      </div>
      <div className="AppWorksDescriptionWrap">
        <div className="AppWorksDescription">
          {desc}
        </div>
      </div>
      <div className="AppWorksDescriptionWrap">
        <div className="AppWorksDescription">
          {subDesc}
        </div>
      </div>
    </div>
  )
}

export default AppWorks;