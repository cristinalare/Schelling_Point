// import BloomingFlower from '../deco/BloomingFlower/BloomingFlower';
import './About.css';
import flowerBg from './flower-bg.svg';


function About () {
    return (
        <div className="about">
            <img className='flower-bg' src={flowerBg} alt="" width="853" height="533" />
            <div className='about-content'>
                <h2 className='yellow main-xxl'>The Joy of <br/>Collective Thriving</h2>
                <p className='description'>An unconference for planetary <br/>wellbeing &amp;  flourishing</p>
            </div>
            {/* <BloomingFlower classes='about-flower'/> */}
        </div>
    );
}

// svg icon
// <svg role="img" title="event icon" viewBox="0 0 140 140" width="140" height="140" alt="event icon">
/* <use href={sprite + "#event1"}></use>  
</svg> */
export default About ;