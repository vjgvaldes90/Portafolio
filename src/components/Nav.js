import React from 'react';
import '../css/Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiFillFolderOpen } from 'react-icons/ai';
import { BiBook} from 'react-icons/bi';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { useState } from 'react';

const Nav = ({activarCarrito}) => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href='#' title='Home' onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' title='About me' onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' title='My Experience' onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href='#services' title='Services' onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#portfolio' title='Protfolio' onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiFillFolderOpen/></a>
      <a href='#contact' title='Conatac Me' onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav