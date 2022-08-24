import { useEffect, useRef } from "react";
import './BloomingFlower.css';

const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);

function BloomingFlower () {
    const f1 = useRef();
    const f2 = useRef();
    const f3 = useRef();
    const f4 = useRef();
    const f5 = useRef();
    const middle = useRef();
    const flowerContainer = useRef();

    useEffect(() => {
        const flowerTl = gsap.timeline({defaults: {y: -50}});
        flowerTl.from(f2.current, {
        rotation: 29,
        transformOrigin: "100% 100%",
        scale: 0.1
        }, 0)
        flowerTl.from(f4.current, {
        rotation: -29,
        transformOrigin: "0% 100%",
        scale: 0.1
        }, 0)
        flowerTl.from(f1.current, {
        rotation: 58,
        transformOrigin: "100% 100%",
        scale: 0.1
        }, "<0.2")
        flowerTl.from(f5.current, {
        rotation: -58,
        transformOrigin: "0% 100%",
        scale: 0.1
        }, "<0.2")
        // middle leaf
        flowerTl.from(f3.current, {
        transformOrigin: "50% 100%",
        scale: 0.1
        }, "<0.2")

        // bulb
        flowerTl.from(middle.current, {
        scale: 1.5,
        xPercent: -25,
        yPercent: -50,
        }, "0.2")

        ScrollTrigger.create({
        animation: flowerTl,
        trigger: flowerContainer.current,
        scrub: 2,
        start: 'top 80%',
        end: '+=200',
        id: 'flower',
        // markers: true
        });
        
        // clean-up
        return () => {
            ScrollTrigger.kill();
            flowerTl.kill();
        }
    }, []);

    return (
        <div ref={flowerContainer} className="flower-container">
        <svg width="408" height="266" viewBox="0 0 428 266" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Flower">
            <g ref={f3} id="f3">
            <path id="Vector_2" d="M272.049 127.835C272.049 193.123 214.318 246.038 214.318 246.038C214.318 246.038 156.588 193.123 156.588 127.835C156.588 62.5472 214.29 9.63208 214.29 9.63208C214.29 9.63208 272.02 62.5472 272.02 127.835H272.049Z" fill="url(#paint0_linear_1508_207)" stroke="#0E0333" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Vector_3" d="M214.29 18.2643C219.055 18.2643 222.919 14.3996 222.919 9.63215C222.919 4.86475 219.055 1 214.29 1C209.524 1 205.66 4.86475 205.66 9.63215C205.66 14.3996 209.524 18.2643 214.29 18.2643Z" fill="#02E2AC" stroke="#0E0333" strokeMiterlimit="10"/>
            </g>
            <g ref={f4} id="f4">
            <path id="Vector_4" d="M223.293 114.8C190.674 171.341 214.203 246.038 214.203 246.038C214.203 246.038 290.66 229.09 323.279 172.55C355.898 116.009 332.368 41.3121 332.368 41.3121C332.368 41.3121 255.912 58.2599 223.293 114.8Z" fill="url(#paint1_linear_1508_207)" stroke="#0E0333" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Vector_5" d="M332.081 49.9443C336.846 49.9443 340.71 46.0796 340.71 41.3121C340.71 36.5447 336.846 32.68 332.081 32.68C327.315 32.68 323.451 36.5447 323.451 41.3121C323.451 46.0796 327.315 49.9443 332.081 49.9443Z" fill="#6F3FF5" stroke="#0E0333" strokeMiterlimit="10"/>
            <path id="Vector_6" d="M260.198 84.2427C264.964 84.2427 268.827 80.378 268.827 75.6105C268.827 70.8431 264.964 66.9784 260.198 66.9784C255.432 66.9784 251.568 70.8431 251.568 75.6105C251.568 80.378 255.432 84.2427 260.198 84.2427Z" fill="#6F3FF5" stroke="#0E0333" strokeMiterlimit="10"/>
            </g>
            <g ref={f2} id="f2">
            <path id="Vector_7" d="M205.283 114.488C237.902 171.029 214.373 245.726 214.373 245.726C214.373 245.726 137.916 228.778 105.297 172.238C72.6782 115.697 96.2076 41 96.2076 41C96.2076 41 172.664 57.9478 205.283 114.488Z" fill="url(#paint2_linear_1508_207)" stroke="#0E0333" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Vector_8" d="M214.629 140.264C219.395 140.264 223.259 136.4 223.259 131.632C223.259 126.865 219.395 123 214.629 123C209.864 123 206 126.865 206 131.632C206 136.4 209.864 140.264 214.629 140.264Z" fill="#6F3FF5" stroke="#0E0333" strokeMiterlimit="10"/>
            <path id="Vector_9" d="M96.6294 50.2643C101.395 50.2643 105.259 46.3996 105.259 41.6322C105.259 36.8647 101.395 33 96.6294 33C91.8635 33 88 36.8647 88 41.6322C88 46.3996 91.8635 50.2643 96.6294 50.2643Z" fill="#6F3FF5" stroke="#0E0333" strokeMiterlimit="10"/>
            <path id="Vector_10" d="M167.629 84.2643C172.395 84.2643 176.259 80.3996 176.259 75.6322C176.259 70.8647 172.395 67 167.629 67C162.864 67 159 70.8647 159 75.6322C159 80.3996 162.864 84.2643 167.629 84.2643Z" fill="#6F3FF5" stroke="#0E0333" strokeMiterlimit="10"/>
            </g>
            <g ref={f1} id="f1">
            <path id="Vector_11" d="M140.825 136.928C197.347 169.557 214.29 246.038 214.29 246.038C214.29 246.038 139.588 269.604 83.0942 236.945C26.5718 204.316 9.62939 127.835 9.62939 127.835C9.62939 127.835 84.3311 104.269 140.825 136.928Z" fill="url(#paint3_linear_1508_207)" stroke="#0E0333" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Vector_12" d="M9.62938 136.467C14.3953 136.467 18.2588 132.602 18.2588 127.835C18.2588 123.068 14.3953 119.203 9.62938 119.203C4.86351 119.203 1 123.068 1 127.835C1 132.602 4.86351 136.467 9.62938 136.467Z" fill="#02E2AC" stroke="#0E0333" strokeMiterlimit="10"/>
            <path id="Vector_13" d="M90.2851 131.115C95.051 131.115 98.9145 127.251 98.9145 122.483C98.9145 117.716 95.051 113.851 90.2851 113.851C85.5193 113.851 81.6558 117.716 81.6558 122.483C81.6558 127.251 85.5193 131.115 90.2851 131.115Z" fill="#02E2AC" stroke="#0E0333" strokeMiterlimit="10"/>
            <path id="Vector_14" d="M159.407 156.839C164.173 156.839 168.036 152.974 168.036 148.207C168.036 143.44 164.173 139.575 159.407 139.575C154.641 139.575 150.777 143.44 150.777 148.207C150.777 152.974 154.641 156.839 159.407 156.839Z" fill="#02E2AC" stroke="#0E0333" strokeMiterlimit="10"/>
            </g>
            <g ref={f5} id="f5">
            <path id="Vector_15" d="M287.783 136.928C231.261 169.557 214.318 246.038 214.318 246.038C214.318 246.038 289.02 269.604 345.514 236.945C402.036 204.316 418.979 127.835 418.979 127.835C418.979 127.835 344.277 104.269 287.783 136.928Z" fill="url(#paint4_linear_1508_207)" stroke="#0E0333" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Vector_16" d="M338.006 131.115C342.772 131.115 346.636 127.251 346.636 122.483C346.636 117.716 342.772 113.851 338.006 113.851C333.24 113.851 329.377 117.716 329.377 122.483C329.377 127.251 333.24 131.115 338.006 131.115Z" fill="#02E2AC" stroke="#0E0333" strokeMiterlimit="10"/>
            <path id="Vector_17" d="M418.116 136.467C422.882 136.467 426.745 132.602 426.745 127.835C426.745 123.068 422.882 119.203 418.116 119.203C413.35 119.203 409.486 123.068 409.486 127.835C409.486 132.602 413.35 136.467 418.116 136.467Z" fill="#02E2AC" stroke="#0E0333" strokeMiterlimit="10"/>
            <path id="Vector_18" d="M268.827 160.925C273.593 160.925 277.457 157.06 277.457 152.293C277.457 147.525 273.593 143.661 268.827 143.661C264.061 143.661 260.198 147.525 260.198 152.293C260.198 157.06 264.061 160.925 268.827 160.925Z" fill="#02E2AC" stroke="#0E0333" strokeMiterlimit="10"/>
            </g>
            <path ref={middle} id="middle" d="M214.289 265C224.758 265 233.245 256.51 233.245 246.038C233.245 235.566 224.758 227.076 214.289 227.076C203.82 227.076 195.333 235.566 195.333 246.038C195.333 256.51 203.82 265 214.289 265Z" fill="#FFE921" stroke="#0E0333" strokeMiterlimit="10"/>
            
            </g>
            <defs>
            <linearGradient id="paint0_linear_1508_207" x1="214.318" y1="9.63208" x2="214.318" y2="246.038" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF8BC"/>
            <stop offset="0.541667" stopColor="#EAE4FF" stopOpacity="0"/>
            <stop offset="1" stopColor="#D7FFF6"/>
            </linearGradient>
            <linearGradient id="paint1_linear_1508_207" x1="236.204" y1="227.087" x2="340.131" y2="49.317" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D7FFF6"/>
            <stop offset="0.510417" stopColor="#EAE4FF" stopOpacity="0"/>
            <stop offset="1" stopColor="#FFF8BC"/>
            </linearGradient>
            <linearGradient id="paint2_linear_1508_207" x1="88.572" y1="40.8001" x2="208.909" y2="245.008" gradientUnits="userSpaceOnUse">
            <stop offset="0.0896446" stopColor="#FFF8BC"/>
            <stop offset="0.483153" stopColor="#EAE4FF" stopOpacity="0"/>
            <stop offset="0.860566" stopColor="#D7FFF6"/>
            </linearGradient>
            <linearGradient id="paint3_linear_1508_207" x1="10.1165" y1="136.835" x2="203.385" y2="248.055" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF8BC"/>
            <stop offset="0.592368" stopColor="#EAE4FF" stopOpacity="0"/>
            <stop offset="0.886461" stopColor="#D7FFF6"/>
            </linearGradient>
            <linearGradient id="paint4_linear_1508_207" x1="246.232" y1="245.32" x2="404.858" y2="144.128" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D7FFF6"/>
            <stop offset="0.510417" stopColor="#EAE4FF" stopOpacity="0"/>
            <stop offset="1" stopColor="#FFF8BC"/>
            </linearGradient>
            </defs>
        </svg>            
    </div>
    );
}

export default BloomingFlower ;