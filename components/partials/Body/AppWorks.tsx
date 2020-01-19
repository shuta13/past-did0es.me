import React from 'react'
import './AppWorks.scss'

const AppWorks: React.FC<{ img: string, title: string, desc: string }> = ({ img, title, desc }) => (
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
  </div>
)

export default AppWorks;