import React from 'react';

function Leaderboards() {
  return (
    <div>
      <h2 class="my-5 mx-4">Leadership boards</h2>
      <div class="row">
        <div class="col-sm-5 mx-4">
          <div class="card">
            <div class="card-header">
              Compare with Friends
            </div>
            <div class="card-body">
              list of names by points
            </div>
          </div>
        </div>
        <div class="col-sm-5">
          <div class="card">
            <div class="card-header">
              Compare with Neighbours
            </div>
            <div class="card-body">
              list of names by points
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboards;
