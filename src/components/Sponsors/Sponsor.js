import './Sponsors.css';
import { Parallax } from 'react-scroll-parallax';

function Sponsor({logo, name}) {
  const width = name === 'protocol' ? '493' : name === 'fuel' ? '170' : '232';
  const height = name === 'protocol' ? '120' : '88';
  return (
    <Parallax opacity={[0, 1]}>
    <img loading="lazy"  className={`sponsor-img ${name}`} src={logo} alt={name} width={width} height={height}/>
    </Parallax>
  );
}

export default Sponsor;