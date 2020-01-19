import React from 'react'
import './AppWorks.scss'

const AppWorks: React.FC<{ img: string, title: string, desc: string, link?: string, subDesc?: string }> = ({ img, title, desc, link, subDesc }) => (
  <div className="AppWorksWrap">
    <div className="AppWorksImageWrap">
      <div className="AppWorksImageClip">
        <img className="AppWorksImage" src={img} alt="works" />
      </div>
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
    <div className="AppWorksLinkWrap">
      <a className="AppWorksLink" href={link} target="_blank">
        {link}
      </a>
    </div>
  </div>
)

export default AppWorks;