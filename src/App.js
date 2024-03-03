import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import { useAuth0 } from '@auth0/auth0-react';
import { Container } from 'reactstrap';
import LoginPage from './Pages/Login';


function App() {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <Authenticated />

        {/* Content */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

function Authenticated() {
  const {isAuthenticated} = useAuth0();

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