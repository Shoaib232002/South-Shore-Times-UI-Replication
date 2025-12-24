import React from 'react'
import './businesscardwrapper.css'
import BusinessCards from './BusinessCards'
import card1 from './assets/card1.png'
import card2 from './assets/card2.png'
import card3 from './assets/card3.png'
import card4 from './assets/card4.png'

function BusinescardWrapper() {
  return (
    <>
    <div className="card-segement">
    <div className="cardsegment1">
    <BusinessCards images={card1} btntext={"Business"} txt={"Behind the Business: Hale Bone Broth"}/>
    <BusinessCards images={card2} btntext={"Business"} txt={"South Shore Chamber Celebrates Community with Launch of New Award"}/>
    <BusinessCards images={card3} btntext={"Business"} txt={"What No One Tells You About Photography and Your Small Business"}/>
    </div>
    <div className="cardsegment2">
    <BusinessCards images={card4} btntext={"Business"} txt={"Bringing Healthcare and Higher Education Together"}/>
    <BusinessCards images={card1} btntext={"Business"} txt={"Behind the Business: Elliott Physical Therapy"}/>
    <BusinessCards images={card1} btntext={"Business"} txt={"Behind the Business: Girl Gang Association"}/>
    </div>
    </div>
    </>
  )
}

export default BusinescardWrapper