// import { useState, useEffect } from 'react';
// import useWindowDimensions from '../../helpers/useWindowDimensions';

import './Divider.css';
import { useParallax } from 'react-scroll-parallax';

import divider1 from './divider1.svg';
import divider2 from './divider2.svg';
import divider3 from './divider3.svg';
import divider4 from './divider4.svg';

function Divider ({end}) {
    // const { width, height } = useWindowDimensions();
    // const [onDesktop, setOnDesktop] = useState();
    // useEffect(() => {
    //     // 960px
    //     window.matchMedia("(min-width: 60rem)").matches ? setOnDesktop(true) : setOnDesktop(false);
    // }, [width]);
    
    
    const div1 = useParallax({ disabled: true, rotate: [0, 174], translateY: [0, 80], targetElement: end.current, shouldAlwaysCompleteAnimation: true, easing: 'easeInCubic'}).ref;
    const div2 = useParallax({ disabled: true, rotate: [0, 177], translateY: [0, 80], targetElement: end.current, shouldAlwaysCompleteAnimation: true, easing: 'easeInQuad'}).ref;
    const div3 = useParallax({ disabled: true, rotate: [0, 180], translateY: [0, 80], targetElement: end.current, shouldAlwaysCompleteAnimation: true, easing: 'easeOutBack'}).ref;
    const div4 = useParallax({ disabled: true, translateX: [0, 1], rotate: [0, 229], targetElement: end.current, shouldAlwaysCompleteAnimation: true }).ref;
   
    return (
        <div className="divider">
            {/* <img className="divider-img" ref={divider} src={dividerImg}/> */}
            <img className='line' ref={div1} src={divider1} alt=""  />
            <img className='line' ref={div2} src={divider2} alt="" />
            <img className='line'  ref={div3} src={divider3} alt=""  />
            <img className='circle' ref={div4} src={divider4} alt=""/> 
        </div>
    );
}

export default Divider ;