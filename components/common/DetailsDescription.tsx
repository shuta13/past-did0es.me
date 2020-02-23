import React from 'react'

const DetailsDescription: React.FC<{ desc: string }> = ({ desc }) => {
  return (
    <div>
      <div>
        { desc }
      </div>
    </div>
  )
}

export default DetailsDescription