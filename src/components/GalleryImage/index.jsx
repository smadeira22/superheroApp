import React from 'react'

const GalleryImage = ({ show }) => {
  return (
    <div className="gallery-image">
        <img src={show.image.medium} alt={show.name}/>
    </div>
  )
}

export default GalleryImage