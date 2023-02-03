import './Sponsors.css';

function Sponsor({logo, name}) {
  return (
    <img loading="lazy" className={`sponsor-img ${name}`} src={logo} alt={name} />
  );
}

export default Sponsor;