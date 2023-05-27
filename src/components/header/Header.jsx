import React from 'react'
import './header.css';
import CTA from './CTA';

import ayaj from '../../assets/ayaj.JPG';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5> Hello I'm</h5>
        <h1> Ayaj Anand</h1>
        <h5 className='text-light'>FullStack Developer</h5>
         <CTA/>
         <HeaderSocials/>
         <div className='me'>
          <img src={ayaj} alt="me" />
         </div>

         <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header