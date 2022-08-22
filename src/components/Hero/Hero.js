import { useRef, useLayoutEffect } from 'react';
import './Hero.css';
import heroBg from './hero-bg.png';
import { Parallax } from 'react-scroll-parallax';
import Button from '../Button/Button';

const gsap = window.gsap;
const CustomEase = window.CustomEase;
gsap.registerPlugin(CustomEase);

function Hero () {
    const ctaRef = useRef();
    const heroContentRef = useRef();

    useLayoutEffect(() => {
        // CTA button animation
        const tl = gsap.timeline({repeat:-1, defaults: {duration: 2.5, ease: CustomEase.create("custom", "M0,0,C0,0,0.064,0.902,0.074,1,0.164,1,1,1,1,1")}});
        tl
            .to(ctaRef.current, { text: {delimiter: "", value: "speak"}})
            .to(ctaRef.current, { text: {delimiter: "", value: "volunteer"}})
            .to(ctaRef.current, { text: { delimiter: "", value: "sponsor"}})
            .to(ctaRef.current, { text: { delimiter: "", value: "perform"}});

        // hero content fade in animation
        const mainAnimation = gsap.from(heroContentRef.current, {
            opacity: 0,
            y: -300,
            duration: 2,
            ease: "power3.out"
        })

        // clean up
        return () => {
            mainAnimation.kill();
            tl.kill();
        }
    }, []);

    return (
        <div className='hero main-xxl'>
            <div className='hero-container'>
                <Parallax shouldAlwaysCompleteAnimation={true} className="hero-bg">
                    <img src={heroBg} alt="" width="471" height="854" fetchpriority="high"/>
                </Parallax>
                <div ref={heroContentRef} className='hero-content'>
                    <div className="hero-title ">
                        <Parallax shouldAlwaysCompleteAnimation={true} translateY={[0, 3]} translateX={[0, 4]} >
                            <h1 className='main-title'>schelling<br/>point<br/><span className='thin'>bogotá</span></h1>
                        </Parallax>
                        <h1 className='shadow-title'>schelling<br/>point<br/><span className='thin'>bogotá</span></h1>
                    </div>
                    <div className="hero-date"><span className='thin'>10</span><br/>oct<br/>22</div>
                    <div className="hero-location">Gran<br/><span className='thin'>Américas</span><br/>Pavilion</div>
                </div>
            </div>
            <Button text='Apply to ' link='https://forms.gle/wEZ7NfettKHKna7k6' ctaRef={ctaRef} />
        </div>
    );
}

export default Hero ;

// previous hero
{/* // preload hero image
    // useEffect(() => {
    //     const img = new Image();
    //     img.src = spAnimation;
    // }, []);
   
    //   const ref1 = useParallax({ rotate: [0, 160] }).ref;
    //   const ref2 = useParallax({ rotate: [0, 160] }).ref;

<div>
    <div className="hero">
        <div className='hero-title'>
            <Parallax shouldAlwaysCompleteAnimation={true} translateY={[0, 2]} translateX={[0, 2]} >
                <h1 className='main-title'>Schelling<br/>Point<br/>Bogota</h1>
            </Parallax>
            <h1 className='shadow-title'>Schelling<br/>Point<br/>Bogota</h1>
        </div>
        <img src={spAnimation} alt="schelling point animated logo" width='500' height='500' />
    </div>
</div> */}