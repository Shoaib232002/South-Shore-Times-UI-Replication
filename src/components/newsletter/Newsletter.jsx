import React from 'react'
import segment1Img from './assets/segment1img.png'
import segment2img1 from './assets/segment2img1.png'
import subsegmentImg from './assets/subsegmentimg.png'
import News from './News'
import './newsletter.css'
function Newsletter() {
    return (
        <>
            <section className="newsletter">
                <div className='news-segment-1'>
                    <img className='img1' src={segment1Img} alt="Women" />
                    <News headings="Hanover Keeps Commercial Tax Shift Amid Business Concerns" time="2 min read" paragraph="Collaboration leads to decision to hold steady commercial property tax" /><hr />
                    <News headings="Hanover dominates Norwell in Thanksgiving Day football game" time="2 min read" /><hr />
                    <News headings="State growth rule change may squeeze Scituate budget" time="2 min read" /><hr />
                    <News headings="Hanover Finalizes Warrant for Dec. 8 Special Town Meeting" time="2 min read" />
                </div>
                <div className='news-segment-2'>
                    <img className='img2' src={segment2img1} alt="News Segment" />
                    <h2>Hanover Approves MBTA Rules, Punts on Recall Petition</h2><p>2 min read</p><hr />
                    <div className="sub-segment">
                        <img className='sub-img' src={subsegmentImg} alt="" />
                        <News headings="Redistricting Work Begins for New Scituate Elementary School" time="2 min read" paragraph="Consultant outlines months-long mapping process for Scituate’s 2027 school opening" />
                    </div>
                </div>
                <div className='news-segment-3'>
                    <News headings="Norwell Schools Report Enrollment Dip, Class Size Pressure" time="2 min read" paragraph="District outlines shifting student numbers during Oct. 20 meeting" /><hr />
                    <News headings="Over 200 South Shore Students Named to BC High Honor Roll" time="1 min read" /><hr />
                    <News headings="Norwell High’s Fourth Wall Players Present “Mamma Mia!”" time="2 min read" /><hr />
                    <News headings="Town Reports Major Infrastructure Updates in Norwell" time="3 min read" /><hr />
                    <News headings="Town Meeting Approves Nearly $1M for Preservation, Land Purchase" time="2 min read" />
                </div>
            </section>
        </>
    )
}

export default Newsletter