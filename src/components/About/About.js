import BloomingFlower from '../deco/BloomingFlower/BloomingFlower';
import './About.css';


function About () {
    return (
        <div className="about">
            <p className="about-keywords main-l">Self-sovereignty <span className="keywords-separation">/ </span> 
                Coordination technology <span className="keywords-separation">/</span> 
                <a className="keywords-link" href="https://bentoism.org/1-what-is-bentoism" target="_blank" rel="noreferrer"> Regenerative economic experiments</a><span className="keywords-separation"> / </span> 
                <a className="keywords-link" href="https://vitalik.ca/general/2018/04/20/radical_markets.html" target="_blank" rel="noreferrer">Radical markets</a><span className="keywords-separation"> / </span> 
                <a className="keywords-link" href="https://en.wikipedia.org/wiki/Solarpunk#:~:text=Solarpunk%20is%20a%20genre%20and,sustainability%2C%20climate%20change%20and%20pollution.&text=In%20literature%2C%20numerous%20previously%20published,being%20solarpunk%2C%20including%20Ursula%20K." target="_blank" rel="noreferrer">
                    Solarpunk lore</a><span className="keywords-separation"> / </span><span className='yellow'>&amp; the many fruits of public goods.</span>
            </p>
            <BloomingFlower classes='about-flower'/>
        </div>
    );
}

// svg icon
// <svg role="img" title="event icon" viewBox="0 0 140 140" width="140" height="140" alt="event icon">
/* <use href={sprite + "#event1"}></use>  
</svg> */
export default About ;