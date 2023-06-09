import React from 'react'
import './about.css';
import ME from '../../assets/DSC_0619.JPG';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';


const About = () => {
  return (
      <section id='about'>
        <h5>Get to Know</h5>
        <h2>About Me</h2>

        <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
              <img src={ME} alt="About Image"/>
            </div>
          </div>

          <div className='about__content'>
            <div className='about__cards'>
             <article className='about__card'>
              <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>Newbie</small>
              </article>

              <article className='about__card'>
              <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>200+ world Henlo</small>
              </article>

              <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>Lmao</small>
              </article>
            </div>
            <p>
              heyloo my name is ayaj anand and currently i am 20 years old and i am seraching for a new job in any of the city so u can hire me.
              </p> 
              <a href='#contact' className='btn btn-primary'>Lets Talk</a>
          </div>
        </div>
      </section>
  )
}

export default About