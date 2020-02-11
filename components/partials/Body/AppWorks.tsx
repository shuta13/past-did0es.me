import React from 'react'
import './AppWorks.scss'

import ImageCanvas from '../../common/ImageCanvas'

const AppWorks: React.FC<{ img: string, title: string, desc: string, link?: string, subDesc?: string }> = ({ img, title, desc, link, subDesc }) => (
  <div className="AppWorksWrap">
    <div className="AppWorksImageWrap">
      <a href={link} target="_blank" className="AppWorksImageClip">
        <ImageCanvas img={img} />
      </a>
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

export default AppWorks;