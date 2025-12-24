import React from 'react'
import './landing.css'
import LogoMedia from '../components/header/LogoMedia'
import NavBar from '../components/header/NavBar'
import img1 from '../components/ads/assets/img1.png'
import img2 from '../components/ads/assets/img2.png'
import img3 from '../components/ads/assets/img3.png'
import img4 from '../components/ads/assets/img4.png'
import img5 from '../components/ads/assets/img5.png'
import img6 from '../components/ads/assets/img6.png'
import Footer from '../components/footer/Footer'
import Newsletter from '../components/newsletter/Newsletter'
import Heading from '../components/headings/Heading'
import PosterImages from '../components/ads/PosterImages'
import Snapshots from '../components/snapshots/Snapshots'
import Button from '../components/button/Button'
import BusinescardWrapper from '../components/businesscards/BusinescardWrapper'
import ObituariesWrapper from '../components/obt/ObituariesWrapper'
import SouthShorelife from '../components/south-shore-life/SouthShorelife'

function LandingPage() {
    return (
        <>
            <div className="stick">
                <LogoMedia />
                <NavBar />
            </div>
            <section className='everything-else'>
                <PosterImages images={img1} />
                <Newsletter />
                <PosterImages images={img2} />
                <Heading heading="Community Snapshots" />
                <Snapshots />
                <Button buttonText={"See More Community Photos"} />
                <PosterImages images={img3} />
                <Heading heading={"South Shore Life"} />
                <SouthShorelife/>   
                <PosterImages images={img6} />
                <Heading heading={"South Shore Business"} />
                <BusinescardWrapper />
                <Button buttonText={"Read More"} />
                <Heading heading={"Obituaries"} />
                <ObituariesWrapper/>
                <Button buttonText={"Read More"} />
                <PosterImages images={img4} />
                <PosterImages images={img5} />
                <Footer />
            </section>
        </>
    )
}

export default LandingPage