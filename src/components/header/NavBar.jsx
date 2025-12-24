import React from 'react'
import Search from './assets/search-logo.svg'
import Menu from './assets/hamburger.svg'
import Moon from './assets/moon.svg'
import './navbar.css'

function NavBar() {
  return (
    <>
      <nav>
        <section className="nav-options">
          <ul>
            <li>TOWNS</li>
            <li>LIFESTYLE</li>
            <li>BUSINESS</li>
            <li>PEOPLE</li>
            <li>OPINION</li>
            <li>SPORTS</li>
            <li>EVENTS</li>
            <li>DIRECTORY</li>
            <li>SUBMIT A STORY</li>
          </ul>
        </section>
        <section className="nav-icons">
          <ul>
            <li><img className='nav-icon-search' src={Search} alt="Search" /></li>
            <li><img className='nav-icon-menu' src={Menu} alt="Hamburger menu" /></li>
            <li><img className='nav-icon-theme' src={Moon} alt="Theme" /></li>
          </ul>
        </section>
      </nav>
    </>
  )
}

export default NavBar