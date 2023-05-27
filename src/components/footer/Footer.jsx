import React from 'react'
import './footer.css';
import {BsLinkedin} from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { BsTwitter} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Ayaj Anand</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>

      </ul>

      <div className='footer__socials'>
      <a href="https://www.linkedin.com/in/ayaj-anand-492986127/" target="blank"> <BsLinkedin/></a>
        <a href="https://github.com/ayajanandz" target="blank"><FaGithub/></a>
        <a href="https://www.instagram.com/da.anandz/" target="blank"><FaInstagram/></a>
        <a href="https://twitter.com/da_anandz" target="blank"><BsTwitter/></a>
      </div>
    </footer>
  )
}

export default Footer