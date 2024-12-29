import React from 'react'
import Gallery_img from './ui/Gallery_img'
import "./style/gallery.scss"
import Gallery_Baaner from './ui/Gallery_Baaner'
const Gallery = () => {
  return (
    <div>
        <Gallery_Baaner/>
        <Gallery_img/>
    </div>
  )
}

export default Gallery