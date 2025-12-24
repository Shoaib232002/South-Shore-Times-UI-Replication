import React from 'react'
import './snapshots.css'
import snapshot1 from './assets/snapshot1.png'
import snapshot2 from './assets/snapshot2.png'
import snapshot3 from './assets/snapshot3.png'
import snapshot4 from './assets/snapshot4.png'

function Snapshots() {
    return (
        <>
            <div className="snapshot-container">
                <div className="bg-image" >
                    <img src={snapshot1} alt="" />
                </div>
                <div className="bg-image" >
                    <img src={snapshot2} alt="" />
                    <p className="img-text"></p>
                </div>
                <div className="bg-image" >
                    <img src={snapshot3} alt="" />
                    <p className="img-text"></p>
                </div>
                <div className="bg-image" >
                    <img src={snapshot4} alt="" />
                    <p className="img-text"></p>
                </div>
            </div>
        </>
    )
}

export default Snapshots