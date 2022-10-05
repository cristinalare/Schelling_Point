// import BloomingFlower from '../deco/BloomingFlower/BloomingFlower';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import './About.css';


function About () {
    const { ref, inView, entry } = useInView({
      threshold: 0.1,
    });

    return (
      <div className="about">
        <svg ref={ref} className="flower-bg" xmlns="http://www.w3.org/2000/svg" id="Layer_1" dataName="Layer 1" width="578.4" height="530.2" viewBox="0 0 438.4 400.2">
          <path className={`f1 ${inView ? 'in-view': 'not-in-view'}`} d="M210.8 283.7c17.7-8.6 22.8 4.6 22.8 4.6c0 0 9.6 8.3-5.1 22.3c-9.3 5.1-17.7-6.6-17.7-6.6c0 0-16.7-15.7 0-20.3Z" fill="none" stroke="#000" strokeMiterlimit="10" transform="translate(219.2,296.6) rotate(120) translate(-219.2,-296.6)"/>
          <path className={`f2 ${inView ? 'in-view': 'not-in-view'}`} d="M219.2 280.7c18.4 0 17.2 15.9 17.2 15.9c0 0 1.2 15-17.2 15c-18 0-14-15-14-15c0 0 0-15.9 14-15.9Z" fill="none" stroke="#000" strokeMiterlimit="10" transform="translate(219.2,296.6) rotate(90) translate(-219.2,-296.6)" />
          <path className={`f3 ${inView ? 'in-view': 'not-in-view'}`} d="M225.5 282.7c18.2 13.9 5.4 24.9 5.4 24.9c0 0-5.4 9.6-19.6 2.5c-14.2-13.5-4.6-22.3-4.6-22.3c0 0 4.6-13.2 18.8-5.1Z" fill="none" stroke="#000" strokeMiterlimit="10" transform="translate(219.3,296.6) rotate(60) translate(-219.3,-296.6)" />
          <path className={`f4 ${inView ? 'in-view': 'not-in-view'}`} d="M233.1 286.8c7.6 20.2-6.3 24.3-6.3 24.3c0 0-16.1 5.7-21.7-5.9c-6.4-18.4 9.9-23.6 9.9-23.6c0 0 11.5-4.4 18.1 5.2Z" fill="none" stroke="#000" strokeMiterlimit="10" transform="translate(219,296.6) rotate(30) translate(-219,-296.6)" />
          <path className={`f5 ${inView ? 'in-view': 'not-in-view'}`} d="M236.1 296.6c0 13.5-16.9 17.5-16.9 17.5c0 0-16.5-6-16.5-17.5c0-14.9 16.5-14.9 16.5-14.9c0 0 10.3 0 16.9 14.9Z" fill="none" stroke="#000" strokeMiterlimit="10" />
          <path className={`f6 ${inView ? 'in-view': 'not-in-view'}`} d="M229.3 309.6c-10.1 8.3-20.1 0-20.1 0c0 0-11.8-10.6 0-24.6c13-9 18.6 0 18.6 0c0 0 16.4 11.7 1.5 24.6Z" fill="none" stroke="#000" strokeMiterlimit="10" transform="translate(219.3,296.7) rotate(-30) translate(-219.3,-296.7)" />
          <path className={`f7 ${inView ? 'in-view': 'not-in-view'}`} d="M226.5 313.1c-14.7 0-21.8-6.6-21.8-6.6c0 0-11.1-10.2 7.1-25.8c19.8-5.6 24.3 15.6 24.3 15.6c0 0 5.6 5.2-9.6 16.8Z" fill="none" stroke="#000" strokeMiterlimit="10" transform="translate(218.6,296.3) rotate(-60) translate(-218.6,-296.3)" />
          <path className={`f8 ${inView ? 'in-view': 'not-in-view'}`} d="M229.9 309.4c-25.2 10.9-27.9-12.8-27.9-12.8c0 0 3.3-20.2 20.5-16.3c13.6 3.3 13.9 16.3 13.9 16.3c0 0 .3-0.9-6.5 12.8Z" fill="none" stroke="#000" strokeMiterlimit="10" transform="translate(219.2,296.6) rotate(-90) translate(-219.2,-296.6)" />
          <path className={`f9 ${inView ? 'in-view': 'not-in-view'}`} d="M218.9 312.9c-15.9 0-14.9-19.3-14.9-19.3c0 0 13.3-24.4 29.8-4.4c4.9 7.5 0 15.2 0 15.2c0 0-1.3 8.5-14.9 8.5Z" fill="none" stroke="#000" strokeMiterlimit="10" transform="translate(218.9,296.7) rotate(-120) translate(-218.9,-296.7)" />
          <ellipse cx="219.2" cy="296.6" rx="18.5" ry="18.5" fill="#ffcb00" stroke="#000" strokeMiterlimit="10"/>
        </svg>
        <div className='about-content'>
            <h2 className='yellow main-xxl'>The Joy of <br/>Collective Thriving</h2>
            <p className='description'>An unconference for planetary <br/>wellbeing &amp;  flourishing</p>
        </div>
          {/* <BloomingFlower classes='about-flower'/> */}
      </div>
    );
}

export default About ;