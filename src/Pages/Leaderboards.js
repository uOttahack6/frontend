import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Leaderboards(props) {
  const [leaderboard, setLeaderboard] = useState(props.leaderboard);

  useEffect(() => {
    if (leaderboard.length === 0) {
      fetchLeaderboardData();
    }
  }, []);

  const fetchLeaderboardData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/testing/leaderboard');
      const data = response.data;
      setLeaderboard(data);
    } catch (error) {
      console.error('Error fetching leaderboard data:', error.message);
    }
  };

  let leaderboard1 = [];
  let leaderboard2 = [];
  // Iterate through the original array
  for (let i = 0; i < leaderboard.length; i++) {
    // Check if the index is even or odd
    if (i % 2 === 0) {
      leaderboard1.push(leaderboard[i]); // Even index
    } else {
      leaderboard2.push(leaderboard[i]); // Odd index
    }
  }
  return (
    <div>
      <h2 className="my-5 mx-4">Leadership boards</h2>
      <div className="row">
        <div className="col-sm-5 mx-4">
          <div className="card">
            <div className="card-header">
              Compare with Friends
            </div>
            <div className="container">
              {leaderboard1.map((user, index) => (
                <div key={index} className="row">
                  <div className="col-8">
                    <p className="fs-5">{user.username}</p>
                  </div>
                  <div className="col-4">
                    <p className="fs-5">{user.totalscore} points</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="card">
            <div className="card-header">
              Compare with Neighbours
            </div>
            <div className="container">
              {leaderboard2.map((user, index) => (
                <div key={index} className="row">
                  <div className="col-8">
                    <p className="fs-5">{user.username}</p>
                  </div>
                  <div className="col-4">
                    <p className="fs-5">{user.totalscore} points</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboards;
