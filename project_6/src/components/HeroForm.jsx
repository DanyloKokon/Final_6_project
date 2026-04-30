import React, { useState } from 'react';
import { VscSearchFuzzy } from "react-icons/vsc";
function HeroForm({ setCountry }) {
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setCountry(location);
    };
 
    const handleChange = (e) => {
        setLocation(e.target.value);
    }

    return (
        <form className='hero-form' onSubmit={handleSubmit}>
            <input className='hero-form-inp' onChange={handleChange} value={location} type="text" placeholder="Search location..." />
            <button className='hero-form-btn' type="submit"><VscSearchFuzzy style={{ width: 25, height: 25 }} /></button>
        </form>
    );
}

export default HeroForm;