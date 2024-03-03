import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoutButton from '../utils/LogoutButton';
import messaging from '../utils/Messaging';

function Home(props) {
  const connected = props.connected;
  const setConnected = props.setConnected;
  const tasks = props.tasks;
  const setMessages = props.setMessages;
  const [totalScore, setTotalScore] = useState(null);
  useEffect(() => {
    const fetchTotalScore = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/private/getScore');
        const data = response.data;
        setTotalScore(data.totalScore);
      } catch (error) {
        console.error('Error fetching total score:', error.message);
      }
    };

    fetchTotalScore();
  }, []); // Empty dependency array to run the effect only once

  const handleConnectClick = () => {
    if (connected) {
      messaging.disconnect();
      messaging.setConnected(false);
      setConnected(false);
      setMessages([]);
    } else {
      messaging.connectWithPromise()
        .then(response => {
          console.log("Successfully connected to Solace Cloud.", response);
          messaging.subscribe("ScheduledTasks");
          messaging.subscribe("Leaderboard");
          messaging.setConnected(true);
          setConnected(true);
        })
        .catch(error => {
          console.log("Unable to establish connection with Solace Cloud, see above logs for more details.", error);
        });
    }
  };

  return (
    <div>
      <button onClick={handleConnectClick}>{connected ? 'Disconnect' : 'Connect'}</button>
      <h5 className="mx-5 my-5">
        Sustainability Points: {totalScore !== null ? totalScore : 'Loading...'}
      </h5>
      <div className="row">
        <div className="col-5 mx-5">
          <div className="card">
            <div className="card-header">
              Sustainability Task of the Day
            </div>
            {tasks.filter(message => message.tasktype === 'totd').map((message, index) => (
              <div key={index} className="card-body">
                <h5 className="card-title">{message.taskname}</h5>
                <p className="card-text">{message.taskdescription}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-5 mx-5">
          <div className="card">
            <div className="card-header">
              Long Term Quests
            </div>
            {tasks.filter(message => message.tasktype === 'long').map((message, index) => (
              <div key={index} className="card-body">
                <h5 className="card-title">{message.taskname}</h5>
                <p className="card-text">{message.taskdescription}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="card col-5 mx-5 my-5">
        <div className="card-header">
          Daily Quest
        </div>
        {tasks.filter(message => message.tasktype === 'daily').map((message, index) => (
          <div key={index} className="card-body">
            <h5 className="card-title">{message.taskname}</h5>
            <p className="card-text">{message.taskdescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

