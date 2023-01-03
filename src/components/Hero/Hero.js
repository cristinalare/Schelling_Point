import { useEffect, useLayoutEffect, useRef } from 'react';
import './Hero.css';
import { Parallax } from 'react-scroll-parallax';
import flowerGif from './animation/flower.gif';
import flowerMov from './animation/flower.mov';
import flowerpng from './animation/flower.png';
import flowerWebm from './animation/flower.webm';
import heroBg from './hero-bg.svg';
import Button from '../Button/Button';

const gsap = window.gsap;
const CustomEase = window.CustomEase;
gsap.registerPlugin(CustomEase);

function Hero () {
    // preload hero bg
    const videoRef = useRef();
    useEffect(() => {
        const img = new Image();
        img.src = heroBg;
    }, []);

    useLayoutEffect(() => {
      try {
        videoRef.current && videoRef.current.play();
      } catch(e) {
        console.log(e);
      }
    }, []);

    return (
      <div className='hero'>
        <div className='hero-container'>
          <Parallax translateY={[0, 40]}  shouldAlwaysCompleteAnimation={true} className="hero-bg">
            <img src={heroBg} alt="" fetchpriority="high"/>
          </Parallax>
          <div className='hero-content'>
            <div className='hero-title'>
              <h1 className='main-xxl'>Schelling<br/>Point<br/>Denver</h1>
              <div className='hero-date italic'>
                March 2nd, ‘23
              </div>
              <h3 className='hero-location italic'>National Western Complex</h3>
            </div>
            <video ref={videoRef} className="hero-animation" poster={flowerGif} playsInline preload="auto" width="500" height="500" loop muted={true}>
              <source src={flowerMov} type="video/quicktime" />
              <source src={flowerWebm} type="video/webm" />
              <img src={flowerpng} alt="" />
            </video>
          </div>
          <div className='hero-buttons'>
              <Button text='Apply to Speak' link='https://forms.gle/CnnJcEFHdVxmKFmS8' />
          </div>
        </div>
      </div>
    );
}

export default Hero ;
