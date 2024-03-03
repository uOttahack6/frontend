// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './utils/LogoutButton';

const Navbar = () => {
    const { isAuthenticated } = useAuth0();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className='container'>
                <div className="d-flex align-items-center">
                    <img src='../biodegradable.png' alt='EcoQuest Logo' width="30" height="30" className='mx-3' />
                    <Link className="navbar-brand" to="/">EcoQuest</Link>
                    <div id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/leaderboards">Leaderboards</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/upload">Upload Accomplishments</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/tips">Tips</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {isAuthenticated && <LogoutButton />}
            </div>
        </nav >
    );
}

export default Navbar;
