import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Pages/Home';
import { useAuth0 } from '@auth0/auth0-react';
import { Container } from 'reactstrap';
import LoginPage from './Pages/Login';

import Navbar from './Navbar';
import Leaderboards from './Pages/Leaderboards';
import Upload from './Pages/Upload';
import Tips from './Pages/Tips';

function App() {
  return (
    <Router>
      <div>
        {/* Authenticated */}
        <Authenticated />
        <Navbar />

        {/* Content */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/leaderboards" element={<Leaderboards />} />
          <Route path="/tips" element={<Tips />} />
        </Routes>
      </div>
    </Router>
  );
}

function Authenticated() {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default App;