import React from 'react'
import './news.css'

function News({headings, time, paragraph}) {
  return (
    <div className='news'>
        <h4>{headings}</h4 >
        <p style={{fontWeight:'400',color:'gray',fontSize:'14px'}}>{time}</p>
        <p style={{color:'gray'}}>{paragraph}</p>
    </div>
  )
}

export default News