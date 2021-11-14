import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from './images/logo.png'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src={Logo} className="navbar-logo-img" alt="Logo" />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu disabled'}>
                    <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/posts" className='nav-links' onClick={closeMobileMenu}>
                            Posts
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/tutorial" className='nav-links' onClick={closeMobileMenu}>
                            Tutorial
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/buy" className='nav-links' onClick={closeMobileMenu}>
                            Buy The Kit
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
}

export default Navbar
