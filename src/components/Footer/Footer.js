import footerBg from './footer-bg.png';
import './Footer.css';
import peregrin from './peregrin-logo.svg';

function Footer () {
  return (
    <footer>
      <div className='partnership'>
        <p>Produced<br/>in partnership<br/>with</p>
        <img src={peregrin} alt="peregrin-logo" width="117" height="70" />
      </div>
      <img className='footer-bg' src={footerBg} alt="" width="1440" height="252"/>
    </footer>
  );
}

export default Footer ;