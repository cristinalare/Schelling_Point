import footerBg from './footer-bg.svg';
import './Footer.css';
import gitcoin from './gitcoin.svg';

function Footer () {
  return (
    <footer>
      <img src={gitcoin} className="gitcoin-logo" alt="gitcoin-logo" width="120" height="40" />
      <img className='footer-bg' src={footerBg} alt="" width="1017" height="190"/>
      <div className='footer-links'>
        <a className="main-link" href="https://t.me/joinchat/EX2vtzI0earU2LER" target="_blank" rel="noreferrer">telegram</a>
        <a className="main-link" href="https://twitter.com/schellingpoint_" target="_blank" rel="noreferrer">twitter</a>
        <a className="main-link" href="https://store.gitcoin.co/collections/schelling-point-2023" target="_blank" rel="noreferrer">store</a>
      </div>
    </footer>
  );
}

export default Footer ;