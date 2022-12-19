import { useEffect } from 'react';
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
    useEffect(() => {
        const img = new Image();
        img.src = heroBg;
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
            <video className="hero-animation" poster={flowerGif} preload="auto" width="500" height="500" autoPlay={true} loop muted={true}>
              <source src={flowerWebm} type="video/webm" />
              <source src={flowerMov} type="video/mov" />
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
