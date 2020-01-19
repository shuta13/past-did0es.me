import React from 'react'
import * as VFX from 'react-vfx'

import './VFXText.scss'

const VFXText: React.FC = () => {
  return (
    <VFX.VFXProvider>
      <div className="ClipVFX">
        <VFX.VFXImg className="VFX" shader={"glitch"} src={require('../../../public/static/apostro.png')} alt="APOSTRO logo"/>
      </div>
    </VFX.VFXProvider>
  )
}

export default VFXText