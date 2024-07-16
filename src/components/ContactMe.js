import React from 'react';
import '../css/ContactMe.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5llcytg', 'template_5ihxoya', form.current, 'jhmOPI7Rh7g-5mkYe')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>vjgonzalez@gmail.com</h5>
            <a href='mailto:vjgonzalez@gmail.com'>Send a message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>Victor Jesus Gonzalez Valdes</h5>
            <a href='https://m.me/victorjesus.gonzalezvaldes.7' target={'_blank'}>Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+5350974466</h5>
            <a href='https://api.whatsapp.com/send?phone'>Send a message</a>
          </article>
        </div>
        {/*End of Contact options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type={'text'} name='name' placeholder='Your Full Name' required />
          <input type={'email'} name='email' placeholder='Your Email' required />
          <textarea name='message' rows={'7'} placeholder='Your Message' required></textarea>
          <button onSubmit={'submit'} className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default ContactMe