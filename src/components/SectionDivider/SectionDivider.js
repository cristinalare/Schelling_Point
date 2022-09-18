import sectionDividerImg from './section-divider.jpg';
import './SectionDivider.css';

function SectionDivider({rotate}) {
  return (
    <div className={rotate ? 'rotate section-divider' : 'section-divider'} style={{backgroundColor: '#FFF8BC'}}>
      <img loading="lazy" src={sectionDividerImg} alt="" width="1920" height="139" />
    </div>
  );
}

export default SectionDivider;