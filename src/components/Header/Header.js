import { useEffect, useState} from "react";
import './Header.css';
import Scroll from 'react-scroll';
import MobileIcon from "./MobileIcon/MobileIcon";
let Link = Scroll.Link;

function Header () {
    const [activeMenu, setActiveMenu] = useState(false);
    const [isTransparentBg, setIsTransparentBg] = useState(true);
    const toggleMenu = () => {
        setActiveMenu(!activeMenu);
    };

    useEffect(() => {
      const changeBg = () => {
        window.scrollY > 50 ? setIsTransparentBg(false) : setIsTransparentBg(true);
      };
      
      window.addEventListener('scroll', changeBg);
      return () => window.removeEventListener('scroll', changeBg);
    }, []);

    const menuItems = [
        // {name: 'About', disabled: false}, 
        {name: 'Speakers', disabled: false},
        {name: 'Sponsors', disabled: false}, 
        {name: 'Agenda', disabled: false}, 
        {name: 'Afterparty', disabled: false}, 
        {name:'Past Events', disabled: false}];

    return (
        <header
          className='main-xxs'
          style={{ backdropFilter: `${isTransparentBg ? 'blur(0px)' : 'blur(15px)'}`}}
        >
            <button className="logo">
                <div onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
                    schelling point
                </div>
            </button>

            {/* <MobileIcon toggleMenu={toggleMenu} activeMenu={activeMenu} className='mobile-icon'/> */}

            <nav className={activeMenu ? 'open' : undefined}>
                <ul>
                    {/* {menuItems.map((menuItem, index) => (
                        <li className="menu-item" key={index}>
                            <Link 
                              onClick={() => activeMenu && toggleMenu()}
                              key={`nav-${index}`} 
                              smooth='easeOutCubic'
                              spy={true} 
                              to={menuItem.name.split(' ')[0]}
                              offset={-83}
                              activeClass='active-nav'
                              className={menuItem.disabled ? 'disabled' : undefined }>
                                {menuItem.name}
                            </Link>
                        </li>
                    ))} */}
                    <li className="main-xxxs"><a className="tickets" href="https://forms.gle/FCsjpxsYr9AikaPj8">Early Bird Tickets</a></li>
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
                        <a href="https://store.gitcoin.co/collections/schelling-point-2023" target="_blank" rel="noreferrer">
                          <svg className="social-media-icon" width="23" height="18" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.49515 1.6712C4.65588 0.706825 5.49026 0 6.46794 0H24.0794C25.0571 0 25.8915 0.706826 26.0522 1.6712L29.3855 21.6712C29.5887 22.8903 28.6486 24 27.4128 24H3.1346C1.89872 24 0.958637 22.8903 1.16181 21.6712L4.49515 1.6712Z" fill="currentColor"/>
                            <path d="M9.77368 8C9.77368 11.3137 12.2361 14 15.2737 14C18.3112 14 20.7737 11.3137 20.7737 8" stroke="#1F774D" strokeWidth="3" strokeLinecap="round"/>
                          </svg>
                        </a>

                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header ;