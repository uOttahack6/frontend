import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Msg from '../utils/Msg';

function Home() {
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

  return (
    <div>
      <div>
        <Msg></Msg>
      </div>
      <div className="row">
        <div className="col-5 mx-5">
          <div className="card">
            <div className="card-header">
              Sustainability Task of the Day
            </div>
            <div className="card-body">
              Words
            </div>
          </div>
        </div>
        <div className="col-5 mx-5">
          <div className="card">
            <div className="card-header">
              Long Term Quests
            </div>
            <ul className="card-body">
              <li className="list-group-item"> Task 1</li>
              <li className="list-group-item"> Task 2</li>
              <li className="list-group-item"> Task 3</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card col-5 mx-5 my-5">
        <div className="card-header">
          Daily Quest
        </div>
        <ul className="card-body">
          <li className="list-group-item"> Task 1</li>
          <li className="list-group-item"> Task 2</li>
          <li className="list-group-item"> Task 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;

