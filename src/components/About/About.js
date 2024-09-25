import React from 'react';
import './About.css';
import aboutBg from './about-bg.svg';
import { Parallax } from 'react-scroll-parallax';

function About () {
    return (
      <div className="about">
        <Parallax opacity={[0, 2]} rotate={[0,80]}>
          <img className="aboutBg" src={aboutBg} alt="" />
        </Parallax>
        <div className='about-content'>
            <h2 className='main-xxl yellow italic joy'>Details <br/>coming soon</h2>
            <p className='description main-l'>We will be announcing the details<br/>by January</p>
        </div>
      </div>
    );
}

export default About ;