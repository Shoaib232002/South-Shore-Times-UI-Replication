import React from 'react'
import './businesscards.css'

function BusinessCards({images,btntext,txt}) {
  return (
    <>
        <div className="card-container">
            <img src={images} alt="" />
            <button className='card-button'>{btntext}</button>
            <h3>{txt}</h3>
        </div>
    </>
  )
}

export default BusinessCards