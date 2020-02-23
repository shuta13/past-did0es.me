import React from 'react'

import './DetailsInfo.scss'

const DetailsInfo: React.FC<{ info: { title: string, date: string, tags: string } }> = ({ info }) => {
  return (
    <div className="DetailsInfoWrap">
      <div className="DetailsInfoTitle">
        title : { info.title }
      </div>
      <div className="DetailsInfoDate">
        date : { info.date }
      </div>
      <div className="DetailsInfoTags">
        tags : { info.tags }
      </div>
    </div>
  )
}

export default DetailsInfo