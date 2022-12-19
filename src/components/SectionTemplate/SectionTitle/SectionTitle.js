import { Parallax } from 'react-scroll-parallax';
import './SectionTitle.css';

function SectionTitle({title, index}) {
    return (
      <div className="section-title-wrapper">
        <Parallax speed={5} scale={[0.7, 1]} className="section-title-container">
            <h2 className="section-title main-xl">{title === 'About' ? 'The Event' : title}</h2>
        </Parallax>
      </div>
    );
}

export default SectionTitle;