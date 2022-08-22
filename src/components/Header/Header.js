import { useState} from "react";
import './Header.css';
import Scroll from 'react-scroll';
import MobileIcon from "./MobileIcon/MobileIcon";
let Link = Scroll.Link;

function Header () {
    const [activeMenu, setActiveMenu] = useState(false);

    const toggleMenu = () => {
        setActiveMenu(!activeMenu);
    };

    const menuItems = [
        {name: 'About', disabled: false}, 
        {name: 'Speakers', disabled: true},
        {name: 'Sponsors', disabled: true}, 
        {name: 'Agenda', disabled: true}, 
        {name: 'Afterparty', disabled: true}, 
        {name:'Past Events', disabled: false}];

    return (
        <header className='main-xxs'>
            <button className="logo">
                <div onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})} className="main-s">
                    schelling point
                </div>
                {/* <svg onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})} className="logo" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.3082 20.2491C19.655 19.5254 20.9707 17.0365 20.2469 14.69C19.5232 12.3434 17.034 11.0278 14.6873 11.7515C12.3405 12.4752 11.0248 14.9641 11.7486 17.3107C12.4723 19.6572 14.9615 20.9728 17.3082 20.2491Z" fill="currentColor"/>
                    <path d="M18.9993 31.9986H20.9993V28.0698L23.7777 30.848L25.192 29.4338L16.7571 20.9996H19.5857L26.6063 28.0196L28.0206 26.6054L22.4136 20.9989H25.2423L29.435 25.1912L30.8493 23.777L28.0709 20.9989H32V18.9991H20.0709L22.0709 16.9992H32V14.9994H24.0709L26.0709 12.9996H32V10.9997H28.0709L30.8493 8.22159L29.435 6.8074L21 15.2416V12.4132L28.0206 5.3932L26.6063 3.97901L21 9.58486V6.75647L25.192 2.56482L23.7777 1.15062L21 3.92808V0H19V11.9288L17 9.92895V0H15V7.92912L13 5.92929V0.000688844H11V3.92946L8.22161 1.15131L6.8073 2.56551L15.2423 10.9997H12.4136L5.39298 3.9797L3.97866 5.39389L9.58569 11.0004H6.75705L2.56435 6.80808L1.15003 8.22228L3.92842 11.0004H0V13.0003H11.9291L9.92911 15.0001H0V16.9999H7.92911L5.92911 18.9997H0V20.9996H3.92842L1.15003 23.7777L2.56435 25.1919L10.9993 16.7577V19.5861L3.97798 26.6068L5.39229 28.021L10.9993 22.4144V25.2428L6.80661 29.4352L8.22092 30.8494L10.9993 28.0712V32H12.9993V20.0719L14.9993 22.0717V32H16.9993V24.0716L18.9993 26.0714V32V31.9986ZM12.9993 17.2497L11.7529 16.0034L12.9938 14.7627V13.0003H14.7495L15.9959 11.754L17.2368 12.9948H19V14.7496L20.2464 15.9959L19.0048 17.2373V18.9997H17.2498L16.0034 20.246L14.7626 19.0052H13V17.2497H12.9993Z" fill="black"/>
                </svg> */}
            </button>

            <MobileIcon toggleMenu={toggleMenu} activeMenu={activeMenu} className='mobile-icon'/>

            <nav className={activeMenu ? 'open' : undefined}>
                <ul>
                    {menuItems.map((menuItem, index) => (
                        <li className="menu-item" key={index}>
                            <Link 
                            onClick={() => activeMenu && toggleMenu()}
                            key={index} 
                            smooth='easeOutCubic'
                            spy={true} 
                            to={menuItem.name}
                            offset={-20}
                            activeClass='active-nav'
                            className={menuItem.disabled ? 'disabled' : undefined }>
                                {menuItem.name}
                            </Link>
                        </li>
                    ))}
                    <li className="social-media-icons">
                        <a href="https://t.me/joinchat/EX2vtzI0earU2LER" target="_blank" rel="noreferrer">
                            <svg className="social-media-icon" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.49314 7.74888C7.32354 5.20867 11.2114 3.534 13.1567 2.72489C18.7109 0.414697 19.865 0.0133926 20.6173 0.000141289C20.7827 -0.00277319 21.1526 0.0382296 21.3923 0.232668C21.5946 0.396848 21.6503 0.618632 21.6769 0.774293C21.7035 0.929954 21.7367 1.28455 21.7103 1.56163C21.4094 4.7241 20.107 12.3986 19.4444 15.9406C19.1641 17.4394 18.6121 17.9419 18.0776 17.9911C16.9162 18.098 16.0342 17.2235 14.9093 16.4861C13.1491 15.3323 12.1546 14.614 10.446 13.488C8.47138 12.1868 9.75145 11.4716 10.8768 10.3027C11.1713 9.99686 16.2886 5.34226 16.3876 4.92001C16.4 4.86721 16.4115 4.67036 16.2946 4.56642C16.1776 4.46247 16.0051 4.49802 15.8805 4.52629C15.704 4.56636 12.8919 6.42501 7.44438 10.1022C6.64619 10.6503 5.92322 10.9174 5.27546 10.9034C4.56136 10.888 3.18771 10.4996 2.16654 10.1677C0.914043 9.76056 -0.0814207 9.5453 0.00526187 8.85385C0.0504115 8.4937 0.54637 8.12538 1.49314 7.74888Z" fill="currentColor"/>
                            </svg>
                        </a>
                        <a href="https://twitter.com/schellingpoint_" target="_blank" rel="noreferrer">
                            <svg className="social-media-icon" width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.7878 2.12422C21.9679 2.48447 21.0859 2.73292 20.1542 2.84472C21.0983 2.28571 21.8312 1.37888 22.1791 0.322981C21.2971 0.84472 20.3157 1.22981 19.2598 1.42857C18.4275 0.546584 17.235 0 15.9182 0C13.384 0 11.3344 2.03727 11.3344 4.54658C11.3344 4.90683 11.3716 5.24224 11.4586 5.59006C7.64491 5.40373 4.26603 3.59006 2.00516 0.832298C1.60764 1.50311 1.38404 2.28571 1.38404 3.11801C1.38404 4.69565 2.19149 6.08696 3.42131 6.90683C2.66354 6.88199 1.95547 6.67081 1.34677 6.3354V6.38509C1.34677 8.59627 2.92441 10.4224 5.02379 10.8447C4.6387 10.9441 4.24118 11.0062 3.81882 11.0062C3.52069 11.0062 3.23497 10.9689 2.94926 10.9193C3.53311 12.7205 5.22255 14.0373 7.23497 14.0745C5.66975 15.2919 3.68218 16.0248 1.53311 16.0248C1.16044 16.0248 0.80019 16 0.439941 15.9627C2.47721 17.2547 4.88715 18 7.471 18C15.9058 18 20.5269 11.0683 20.5269 5.0559C20.5269 4.85714 20.5269 4.65838 20.5145 4.47205C21.4213 3.83851 22.1915 3.03106 22.8002 2.1118" fill="currentColor"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header ;