import React from 'react'
import ShoreCards from './ShoreCards'
import lifeb from './assets/lifeb.png'
import s1 from './assets/s1.png'
import s2 from './assets/s2.png'
import s3 from './assets/s3.png'
import s4 from './assets/s4.png'
import s5 from './assets/s5.png'
import './southshorelife.css'
import './shorecard.css'

function SouthShorelife() {
    return (
        <>
            <div className="seg">
                <div className="bcard">
                    <img className='bimg' src={lifeb} alt="Shore Life main Image" />
                    <button className='card-button'>Health & Wellness</button>
                    <h3>Feel-Good Gifts that Support Winter Wellness</h3>
                    <p className='bpara'>Elliott Physical Therapy PTs share favorite stocking stuffers as residents look for meaningful health-focused holiday gifts.</p>
                </div>
                <div className="subseg">
                <div>
                    <ShoreCards simg={s1} lifebtn={"Lifestyle"} lifetext={"What Parents Should Ask When Choosing a Private School"} />
                    <ShoreCards simg={s2} lifebtn={"Lifestyle"} lifetext={"The Company Theatre Earns Major 2025 BroadwayWorld Nominations"} />
                    <ShoreCards simg={s3} lifebtn={"Lifestyle"} lifetext={"Finding calm and strength in a busy holiday season"} />
                </div>
                <div>
                    <ShoreCards simg={s4} lifebtn={"Lifestyle"} lifetext={"Rethinking Holiday Lists with Experience Gifts"} />
                    <ShoreCards simg={s5} lifebtn={"Lifestyle"} lifetext={"My PhD Didn’t Prepare Me for Parenthood"} />
                </div>
                </div>
            </div>
        </>
    )
}

export default SouthShorelife