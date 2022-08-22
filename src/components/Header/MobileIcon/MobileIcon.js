import './MobileIcon.css';

function MobileIcon ({toggleMenu, activeMenu}) {
    return (
        <div className="mobile-icon">
            <div onClick={toggleMenu} className={activeMenu ? 'mobile-icon-inner flip' : 'mobile-icon-inner'}>
                <svg className="open-icon" width="40px" height="40px" alt="open menu icon" viewBox="0 0 50 50" enableBackground="new 0 0 50 50">
                    <path fill="#000" d="M8.667,15h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,15,8.667,15z"/>
                    <path fill="#000" d="M8.667,37h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,37,8.667,37z"/>
                    <path fill="#000" d="M8.667,26h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,26,8.667,26z"/>
                </svg>
                <svg className="close-icon" width="40px" height="40px" alt="close menu icon" viewBox="0 0 50 50" enableBackground="new 0 0 50 50">
                    <path fill="#000" d="M9.016,40.837c0.195,0.195,0.451,0.292,0.707,0.292c0.256,0,0.512-0.098,0.708-0.293l14.292-14.309
                        l14.292,14.309c0.195,0.196,0.451,0.293,0.708,0.293c0.256,0,0.512-0.098,0.707-0.292c0.391-0.39,0.391-1.023,0.001-1.414
                        L26.153,25.129L40.43,10.836c0.39-0.391,0.39-1.024-0.001-1.414c-0.392-0.391-1.024-0.391-1.414,0.001L24.722,23.732L10.43,9.423
                        c-0.391-0.391-1.024-0.391-1.414-0.001c-0.391,0.39-0.391,1.023-0.001,1.414l14.276,14.293L9.015,39.423
                        C8.625,39.813,8.625,40.447,9.016,40.837z"/>
                </svg>
            </div>
        </div>
    );
}

export default MobileIcon ;