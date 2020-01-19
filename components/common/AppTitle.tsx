import React from 'react'
import './AppTitle.scss'

const AppTitle: React.FC<{ title: string }> = ({ title }) => (
  <div className="AppTitleWrap">
    <div className="AppTitle">{title}</div>
  </div>
)

export default AppTitle;