import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md';
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_miwq7bv', 'template_r1d0e1s', form.current, 'PQyqp8SqwrXNTw9ay')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>
        Get In Touch
      </h5>
      <h2>
        Contact Me
      </h2>
      <div className='container contact__container'>
        <div className='contact__options'>
        <article className='contact__option'>
        <MdOutlineEmail className='contact__option-icon'/>
        <h4>
            Email
          </h4>
          <h5>
            samm.ayajanand@gmail.com
          </h5>
        <a href='mailto:samm.ayajanand@gmail.com' target='_blank'>Send a Message</a>
         </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type ="text" name='name' placeholder="Your Full Name" required />
          <input type ="email" name='email' placeholder="Your Email" required />
         <textarea name ="message" rows="7" placeholder='Your Message' required ></textarea>
         <button types="submit" className='btn btn-primary'> Send Messsage</button>
        </form>
      </div>
    </section>
  )
}

export default Contact