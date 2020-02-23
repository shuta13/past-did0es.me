import React from 'react'
import ImageCanvas from './ImageCanvas'

const DetailsImage: React.FC<{ img: string }> = ({ img }) => {
  return (
    <div>
      <ImageCanvas img={img} />
    </div>
  )
}

export default DetailsImage