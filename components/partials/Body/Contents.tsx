import React, { useRef, useEffect } from 'react'

import ContentsForPC from './ContentsForPC'
import ContentsForPhone from './ContentsForPhone'

import useGetWindowSize from '../../hooks/useGetWindowSize'

const Contents = () => {
  const { width } = useGetWindowSize()
  return (
    <div>
      { width > 615 && <ContentsForPC />}
      { width <= 615 && <ContentsForPhone /> }
    </div>
  )
}

export default Contents