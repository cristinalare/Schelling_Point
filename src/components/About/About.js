// import BloomingFlower from '../deco/BloomingFlower/BloomingFlower';
import React from 'react';
import { useInView } from 'react-intersection-observer';
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
            <h2 className='main-xxl yellow italic joy'>The Joy of <br/>Collective Thriving</h2>
            <p className='description main-l'>An Unconference For Planetary <br/>Wellbeing &amp;  Flourishing</p>
        </div>
      </div>
    );
}

export default About ;