import logo from '../assets/logo.svg';
import React, { useState, } from 'react';



function NavBar({  setIsReg, user, homeRef, weatherRef }) {

    const [pfp, setPfp] = useState(() => {
        const savedPfp = localStorage.getItem('pfp');
        return savedPfp ? JSON.parse(savedPfp) : null;
    });


    const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
        <nav className="nav">
            <img src={logo} alt="Logo" className="logo" />

            <ul className="nav_ul">
                <li><a href="#" onClick={() => scrollToSection(homeRef)}>Home</a></li>
                <li><a href="#" onClick={() => scrollToSection(weatherRef)}>Weather</a></li>
            </ul>


            {user === null && <button className="sinup" onClick={() => setIsReg(true)}>
                <span className="sinup-text">Sign Up</span>
            </button>}
          
            {user !== null && <p className='name-user'>Hi {user.name}</p>}
            {user !== null && pfp && <img src={pfp} alt="Profile Picture" className="user-pfp" />}
        </nav>
    );
}

export default NavBar;