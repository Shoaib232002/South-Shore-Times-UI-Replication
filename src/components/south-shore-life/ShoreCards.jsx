import React from 'react'
import './shorecard.css'

function ShoreCards({ lifebtn, lifetext, simg }) {
    return (
        <>
            <div className="scard">
                <div>
                    <img className='simg' src={simg} alt="Shore Life sub images" />
                </div>
                <div>
                    <button className='card-button'>{lifebtn}</button>
                    <h3 className='sch3'>{lifetext}</h3>
                </div>
            </div>
        </>
    )
}

export default ShoreCards