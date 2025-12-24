import React from 'react'
import './obituaries.css'

function Obituaries({img,text}) {
  return (
    <>
    <div className='obituaries-img-txt'>
        <img className='obt-img' src={img} alt="Obituries image" />
        <p className='obt-p'>{text}</p>
    </div>
    </>
  )
}

export default Obituaries