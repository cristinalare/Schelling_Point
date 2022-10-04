import { useEffect } from 'react';
import './Hero.css';
import heroBg from './hero-bg.png';
import { Parallax } from 'react-scroll-parallax';
import divider from './divider.svg';

const gsap = window.gsap;
const CustomEase = window.CustomEase;
gsap.registerPlugin(CustomEase);

function Hero () {
    // const ctaRef = useRef();

    // preload hero bg
    useEffect(() => {
        const img = new Image();
        img.src = heroBg;
    }, []);

    // useLayoutEffect(() => {
        // CTA button animation
        // const tl = gsap.timeline({repeat:-1, defaults: {duration: 1.2, ease:  CustomEase.create("custom", "M0,0,C0.14,0,0.242,0.438,0.272,0.561,0.313,0.728,0.53,0.98,0.552,1,0.57,1,0.707,0.995,0.726,0.998,0.829,1.01,1,1,1,1")}});
        // tl
        //     .to(ctaRef.current, { text: {delimiter: "", value: "volunteer"}})
        //     .to(ctaRef.current, { text: { delimiter: "", value: "sponsor"}})
        //     .to(ctaRef.current, { text: { delimiter: "", value: "attend"}});

        // hero content fade in animation
        // const mainAnimation = gsap.fromTo(heroContentRef.current, {
        //     opacity: 0,
        //     y: -200
        // },{
        //     opacity: 1,
        //     y: 0,
        //     duration: 2
        // });

        // clean up
        // return () => {
        //     tl.kill();
        // }
    // }, []);

    return (
      <div className='hero main-xxl'>
        <div className='hero-container'>
          <img src={divider} className="hero-divider" alt="" width="1920" height="385" />
          <Parallax shouldAlwaysCompleteAnimation={true} className="hero-bg">
            <img src={heroBg} alt="" width="471" height="854" fetchpriority="high"/>
          </Parallax>
          <div className='hero-content'>
              <div className="hero-title">
                <Parallax shouldAlwaysCompleteAnimation={true} translateY={[0, 3]} translateX={[0, 4]} >
                  <h1 className='main-title'>schelling<br/>point<br/><span className='thin'>bogotá</span></h1>
                </Parallax>
                <h1 className='shadow-title'>schelling<br/>point<br/><span className='thin'>bogotá</span></h1>
              </div>
              <div className="hero-date"><span className='thin'>10</span><br/>oct<br/>22</div>
              <div className="hero-location">gran carpa<br/><span className='thin'>américas</span><br/>corferias</div>
          </div>
        </div>
        {/* <Button text='Apply to ' link='https://forms.gle/wEZ7NfettKHKna7k6' ctaRef={ctaRef} /> */}
      </div>
    );
}

export default Hero ;
