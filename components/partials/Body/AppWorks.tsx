import React from 'react'
import './AppWorks.scss'

const AppWorks: React.FC<{ img: string, title: string, desc: string }> = ({ img, title, desc }) => (
  <div className="AppWorksWrap">
    <div>
      <img src={img} alt="works" />
    </div>
    <div>
      <div>
        {title}
      </div>
    </div>
    <div>
      <div>
        {desc}
      </div>
    </div>
  </div>
)

export default AppWorks;