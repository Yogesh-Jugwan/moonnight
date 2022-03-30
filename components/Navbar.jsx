import Link from 'next/link';
import React,{ useState } from 'react'

const Navber = ({show,click}) => {
  return (
    <div className='sticky-top'>{/* Start Main Menu Area */}
      <div className="main-header-area header-sticky">
        <div className="container">
          <div className="classy-nav-container breakpoint-off">
            {/* Classy Menu */}
            <nav className="classy-navbar justify-content-between" id="bikeNav">
              {/* Logo */}
              <Link className="nav-brand" href="/" passHref><img src="assets/img/logo.png" alt="logo" /></Link>
              {/* Navbar Toggler */}
              <div className="classy-navbar-toggler">
                <span className={`navbarToggler ${show && "navbarToggler active"}`} 
                onClick={click}><span /><span /><span /></span>
              </div>
              {/* Menu */}
              <div className={`classy-menu ${show && "classy-menu menu-on"}`}>
                {/* close btn */}
                {/* <div className="classycloseIcon"  onClick={()=>{toggleMenu()}}>
                  <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
                </div> */}
                {/* Nav Start */}
                <div className="classynav">
                  <ul onClick={click}>
                   <li> <Link href="/" className="active"><a>Home</a></Link></li>
                   <li> <Link href="/about"><a>about us</a></Link></li>
                   <li> <Link href="/products"><a>products</a></Link></li>
                   <li> <Link href="/blog"><a>Blog</a></Link></li>
                   <li> <Link href="/contact"><a>contact</a></Link></li>
                   <li><Link href="/products" className="search-btn"><a><i className="fa fa-search"></i></a></Link></li>
                  </ul>
                </div>
                {/* Nav End */}
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* End Main Menu Area */}
    </div>
  )
}

export default Navber