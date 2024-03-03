import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Pages/Home';
import { useAuth0 } from '@auth0/auth0-react';
import { Container } from 'reactstrap';
import LoginPage from './Pages/Login';

import Navbar from './Navbar';
import Leaderboards from './Pages/Leaderboards';
import Upload from './Pages/Accomplishments';
import Tips from './Pages/Tips';
import Callback from './Pages/Callback';
import { useState } from 'react';
import messaging from './utils/Messaging';

function App() {
  const [messages, setMessages] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [connected, setConnected] = useState(false);
  useEffect(() => {
    const handleMessage = (message) => {
      setMessages(messages => [...messages, JSON.parse(message.payloadString)]);
      if (message.destinationName === "ScheduledTasks") {
        setTasks(JSON.parse(message.payloadString));
      } else if (message.destinationName === "Leaderboard") {
        setLeaderboard(JSON.parse(message.payloadString));
      }
    };
    messaging.register(handleMessage);
  }, []); // Empty dependency array ensures the effect runs only once
  return (
    <Router>
      <div>
        {/* Authenticated */}
        <Authenticated />
        <Navbar />

        {/* Content */}
        <Routes>
          <Route exact path="/" element={<Home tasks={tasks} setMessages={setMessages} connected={connected} setConnected={setConnected} />} />
          <Route path="/upload" element={<Upload tasks={tasks} />} />
          <Route path="/leaderboards" element={<Leaderboards leaderboard={leaderboard} />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/callback" element={<Callback />} />
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
}

export default App;