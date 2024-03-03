import React from 'react';
import LogoutButton from './utils/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import "./Navbar.css"

import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title"> EcoQuest </a>
        <ul>
            <li>
                <a href="/leaderboards">Leaderboards</a>
            </li>
            <li>
                <a href="/upload">Upload Accomplishments</a>
            </li>
            <li>
                <a href="/tips">Tips</a>
            </li>
            <li>
                <LogoutButton />
            </li>
        </ul>
    </nav>
}
