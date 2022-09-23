import sectionDividerImg from './section-divider.jpg';
import './SectionDivider.css';

function SectionDivider({rotate}) {
  return (
    <div className={rotate ? 'rotate section-divider' : 'section-divider'} style={{backgroundColor: '#FFFFFF'}}>
      <img loading="lazy" src={sectionDividerImg} alt="" width="1920" height="113" />
    </div>
  );
}

export default SectionDivider;