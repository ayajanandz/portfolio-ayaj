import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ayaj-anand-492986127/" target="blank"> <BsLinkedin/></a>
        <a href="https://github.com/ayajanandz" target="blank"><FaGithub/></a>
        <a href="https://www.instagram.com/da.anandz/" target="blank"><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials