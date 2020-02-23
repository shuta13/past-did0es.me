import React from 'react'

const DetailsInfo: React.FC<{ info: { title: string, date: string, tags: string } }> = ({ info }) => {
  return (
    <div>
      <div>
        title : { info.title }
      </div>
      <div>
        date : { info.date }
      </div>
      <div>
        tags : { info.tags }
      </div>
    </div>
  )
}

export default DetailsInfo