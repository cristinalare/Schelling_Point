import footerBg from './footer-bg.png';
import './Footer.css';

function Footer () {
  return (
    <footer>
      <img className='footer-bg' src={footerBg} alt="" width="1440" height="252"/>
    </footer>
  );
}

export default Footer ;