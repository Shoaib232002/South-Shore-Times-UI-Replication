import React from 'react'
import './posterimages.css'
function PosterImages({ images }) {
    return (
        <>
            <div className="img-container">
                <img src={images} alt="poster image" />
            </div>
        </>
    )
}

export default PosterImages