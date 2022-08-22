import footerBg from './footer-bg.png';
import gitcoingCommunity from './gitcoin-community.svg';
import './Footer.css';

function Footer () {
    return (
        <footer>
            <img className='footer-gitcoin' src={gitcoingCommunity} alt="" width="163" height="34" />
            <img className='footer-bg' src={footerBg} alt="" width="1440" height="348"/>
        </footer>
    );
}

export default Footer ;