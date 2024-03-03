import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Navbar';
import Leaderboards from './Pages/Leaderboards';
import Upload from './Pages/Accomplishments';
import Tips from './Pages/Tips';

function App() {
  return (
    <Router>
      <div>
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

export default App;
