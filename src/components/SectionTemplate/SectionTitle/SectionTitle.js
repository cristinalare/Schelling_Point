import { Parallax } from 'react-scroll-parallax';
import './SectionTitle.css';
import titleBg from './title-bg.png';

function SectionTitle({title, index}) {
    return (
      <div className="section-title-wrapper">
        <Parallax speed={5} scale={[0.7, 1]} className="section-title-container">
            <img className={index % 2 === 0 ? 'section-title-bg odd' : 'section-title-bg even'} src={titleBg} alt=""/>
            <h2 className="section-title main-l">{title === 'About' ? 'The Event' : title}</h2>
        </Parallax>
      </div>
    );
}

export default SectionTitle;