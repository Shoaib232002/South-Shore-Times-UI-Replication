import React from 'react'
import Obituaries from './Obituaries'
import obt1 from './assets/obt1.png'
import obt2 from './assets/obt2.png'
import obt3 from './assets/obt3.png'
import obt4 from './assets/obt4.png'
import obt5 from './assets/obt5.png'
import obt6 from './assets/obt6.png'
import './obituarieswrapper.css'

function ObituariesWrapper() {
  return (
    <>
    <div className="wrap-segments">
    <div className="segment-one">
        <Obituaries img={obt1} text={"Ryan Taylor Parsons"}/>
        <Obituaries img={obt2} text={"John F. Crowley"}/>
        <Obituaries img={obt3} text={"Kathleen M. Kiley"}/>
    </div>
    <div className="segment-two">
        <Obituaries img={obt4} text={"Louis J. Carpenito"}/>
        <Obituaries img={obt5} text={"Eunice M. Hannon"}/>
        <Obituaries img={obt6} text={"Michael Joseph Marrone"}/>
    </div>
    </div>
    </>
  )
}

export default ObituariesWrapper