import React, { useState, useEffect} from 'react';
import "./Nav.css";
import { useNavigate } from 'react-router-dom';
import Logo from "./Logonetflix.png";
import Avatar from "./Netflix-avatar.png"

function Nav() {
const [show, handleShow] = useState(false);
const history = useNavigate();

const transitionNavBar = () => {
    if(window.scrollY >100) {
      handleShow(true);
    }  else {
      handleShow(false)
    }
};

useEffect (() => {
  window.addEventListener("scroll", transitionNavBar)
  return () => window.removeEventListener('scroll', transitionNavBar);
}, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>

      <div className='nav_content'>
        <img 
          onClick={() => history('/')}
          className='nav_logo'
          src={Logo} 
          alt="Logo"/>
        <img 
          onClick={() => history('/profile')}
          className='nav_avatar'
          src={Avatar}
          alt="Avatar"/>
      </div>
    </div>
  )
}

export default Nav