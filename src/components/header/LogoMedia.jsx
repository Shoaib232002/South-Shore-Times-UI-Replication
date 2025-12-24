import React from 'react'
import './logoandmedia.css'
import FacebookLogo from './assets/Facebook-icon.svg'
import InstagramLogo from './assets/Instagram-icon.svg'
import LinkedInLogo from './assets/LinkedIn-icon.svg'
import WebsiteLogo from './assets/Logo.png'
function LogoMedia() {
  return (
    <>    <section className='logo-container'>
      <div className="logo">
        <img src={WebsiteLogo} alt="Website Logo" />
      </div>
      <section className="media-links">
        <img className='media-icons' src={FacebookLogo} alt="Facebook logo" />
        <img className='media-icons' src={InstagramLogo} alt="Instagram logo" />
        <img className='media-icons' src={LinkedInLogo} alt="LinkedIn logo" />
      </section>
    </section>
    </>
  )
}

export default LogoMedia