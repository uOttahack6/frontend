// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className='container'>
                <img src='../biodegradable.png' alt='EcoQuest Logo' width="30" height="30" className='mx-3' />
                <Link className="navbar-brand" to="/">EcoQuest</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
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
        </nav>
    );
}

export default Navbar;
