import React, {useState} from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import img1 from '../../assets/GalleryImage/1.jpg'
import img2 from '../../assets/GalleryImage/2.jpg'
import img3 from '../../assets/GalleryImage/3.jpg'
import img4 from '../../assets/GalleryImage/4.jpg'
import img5 from '../../assets/GalleryImage/5.jpg'
import img6 from '../../assets/GalleryImage/6.jpg'
import img7 from '../../assets/GalleryImage/7.jpg'
// import img8 from '../../assets/GalleryImage/8.jpg'

function Gallery() {
    const images=[
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        // img8
    ]
   
  return (
   <>
    <div className='container max-width' id='gallery'>
        <div className='heading'>
          <h1>Gallery</h1>
        </div>
        <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter='10px'>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block"}}
                            alt=""
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
    </div>
    </>
  )
}

export default Gallery
