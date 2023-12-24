import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';

import '../styles/header.css';

function Header() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const onGoHomeClicked = () => navigate('/main');

    let goHomeButton = null;
    if (pathname !== '/main' && pathname !== '/Login') {
        goHomeButton = (
            <button
                className='Home_button'
                title='Home'
                onClick={onGoHomeClicked}
            >
                <FontAwesomeIcon icon={faHouse} />
            </button>
        );
    }

    return (
        <header className={'header'}>
            {goHomeButton}
            <p className='tit'>TimeOut</p>
        </header>
    );
}

export default Header;
