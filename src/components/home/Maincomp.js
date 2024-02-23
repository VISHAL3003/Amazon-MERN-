import React from 'react';
import Banner from './Banner.js';
import "./home.css";

const Maincomp = () => {
  return (
    <div className='home_section'>
        <div className="banner_part">
            <Banner />
        </div>
    </div>
  )
}

export default Maincomp