import React from 'react'
import ImageCanvas from './ImageCanvas'

const DetailsImage: React.FC<{ img: string }> = ({ img }) => {
  return (
    <ImageCanvas img={img} isDetails={ true } />
  )
}

export default DetailsImage