import React from 'react'
import ImageCanvas from './ImageCanvas'

import './DetailsImage.scss'

const DetailsImage: React.FC<{ img: string }> = ({ img }) => {
  return (
    <div className="DetailsImageWrap">
      <ImageCanvas img={img} isDetails={ true } />
    </div>
  )
}

export default DetailsImage