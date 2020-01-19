import React from 'react'
import './Copyright.scss'

const Copywrite: React.FC<{ person: string }> = ({ person }) => (
  <div className="CopyrightWrap">
    <div className="Copyright">{person}</div>
  </div>
)

export default Copywrite;