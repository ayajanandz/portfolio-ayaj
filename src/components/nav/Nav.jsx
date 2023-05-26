import React, { useState } from 'react'
import './nav.css';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';

import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BsChatText } from 'react-icons/bs';


const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')
  return (
    // <div>Ayaj</div>
    <nav>
       <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><BiBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><BsChatText/></a>
    </nav> 
  )
}

export default Nav