import React from 'react'
import './AppTitle.scss'

const AppTitle: React.FC<{ title: string }> = ({ title }) => (
  <div className="AppTitleWrap">
    {title}
  </div>
)

export default AppTitle;