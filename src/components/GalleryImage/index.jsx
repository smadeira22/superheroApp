import React from 'react'

const GalleryImage = ({ Hero }) => {
  return (
    <div className="gallery-image">
        <img src={Hero.image.medium} alt={Hero.name}/>
    </div>
  )
}

export default GalleryImage