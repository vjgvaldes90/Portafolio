import React from 'react';
import '../css/Footer.css';
import {FaFacebook} from 'react-icons/fa';
import {IoLogoTwitter} from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
        <a href='#' className='footer_logo'>VGV</a>
        <ul className='permalinks'>
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About Me</a></li>
          <li><a href='#experience'>My Experience</a></li>
          <li><a href='#services'>My Services</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#contact'>Contact Me</a></li>
        </ul>
        <div className='footer_socials'>
         <a href='https://facebook.com'><FaFacebook/></a>
         <a href='https://twitter.com'><IoLogoTwitter/></a>
        </div>
        <div className='footer_copyright'>
          <small>&copy; Victor J Gonzalez. All right reserved</small>
        </div>
    </footer>
  )
}

export default Footer;