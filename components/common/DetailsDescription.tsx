import React from 'react'

import './DetailsDescription.scss'

const DetailsDescription: React.FC<{ desc: string }> = ({ desc }) => {
  return (
    <div className="DetailsDescriptionWrap">
      <div className="DetailsDescriptionText">
        { desc }
      </div>
    </div>
  )
}

export default DetailsDescription