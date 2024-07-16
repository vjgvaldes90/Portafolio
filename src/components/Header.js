import React from 'react';
import '../css/Header.css';
import Victor3 from '../img/victor3.png';
import HeaderSocials from './HeaderSocials';
import CTA from './CTA';

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Victor J Gonzalez</h1>
        <h5 className='text-ligth'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={Victor3} alt='me' />
        </div>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header