import React from 'react'
import footerImg from './assets/footer-img.png'
import './footer.css'

function Footer() {
  return (
    <>
        <footer>
            <div className="footer-box">
            <div className="logo"><img src={footerImg} alt="footer logo" /></div>
            <div className='footer-text'>
                <p>About Us | Terms & Agreement | Town Links | Advertise | Community Publishers</p>
                <p className='indent'>Copyright © 2025 by Times Media Group, All Rights Reserved</p>
            </div>
            </div>
        </footer>
    </>
  )
}

export default Footer