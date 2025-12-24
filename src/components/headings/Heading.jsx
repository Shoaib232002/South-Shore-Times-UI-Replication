import React from 'react'
import './heading.css'
function Heading({heading}) {
  return (
    <>
       <div className="heading-container"><div className='heading-line'></div><h2>{heading}</h2></div>
    </>
  )
}

export default Heading