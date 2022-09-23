import './Sponsors.css';

function Sponsor({logo, name}) {
  // const width = name === 'protocol' ? '493' : name === 'fuel' ? '170' : '232';
  // const height = name === 'protocol' ? '120' : '88';
  return (
    <img loading="lazy"  className={`sponsor-img ${name}`} src={logo} alt={name} />
  );
}

export default Sponsor;