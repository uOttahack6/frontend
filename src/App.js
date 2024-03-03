import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Pages/Home';
import { useAuth0 } from '@auth0/auth0-react';
import { Container, Nav } from 'reactstrap';
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
  const {isAuthenticated, isLoading} = useAuth0();
  const [authLoaded, setAuthLoaded] = React.useState(false);

  useEffect(() => {
    if (!isLoading) {
      setAuthLoaded(true);
    }
  }, [isLoading]);

  if (!authLoaded || isLoading) {
    return null;
  }

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return <Navbar />;
}

export default App;