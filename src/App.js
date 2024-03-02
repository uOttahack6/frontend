import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import { useAuth0 } from '@auth0/auth0-react';
import { Container } from 'reactstrap';
import LoginButton from './utils/LoginButton';
import LogoutButton from './utils/LogoutButton';

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <div id="app" className="d-flex flex-column h-100">
        {/* Navbar */}
        <nav>
          <ul>

            {isAuthenticated && (
              <>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <LogoutButton />
                </li>
              </>
            )}

          </ul>

          {/* Conditionally render login button */}
          {!isAuthenticated && (

            <LoginButton />

          )}
        </nav>

        {/* Content */}
        <Container className="flex-grow-1 mt-5">
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
