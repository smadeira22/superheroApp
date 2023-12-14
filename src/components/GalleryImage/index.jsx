import React from 'react'

const GalleryImage = ({ Hero }) => {
  return (
    <div className="gallery-image">
        <img src={Hero.url} alt={Hero.name}/>
    </div>
  )
}

export default GalleryImage