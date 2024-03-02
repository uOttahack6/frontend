import React from 'react';
//import "bootstrap/dist/js/bootstrap.bundle.min";
//import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div>
      <h5 class="mx-4 my-5">
        Sustainability Points:
      </h5>
      <div class="row">
        <div class="col-sm-5 mx-4">
          <div class="card">
            <div class="card-header">
              Sustainability Task of the Day
            </div>
            <div class="card-body">
              Words
            </div>
          </div>
        </div>
        <div class="col-sm-5">
          <div class="card">
            <div class="card-header">
              Long Term Quests
            </div>
            <ul>
              <li class="list-group-item"> Task 1</li>
              <li class="list-group-item"> Task 2</li>
              <li class="list-group-item"> Task 3</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card col-sm-5 mx-4">
        <div class="card-header">
          Daily Quest
        </div>
        <ul>
            <li class="list-group-item"> Task 1</li>
            <li class="list-group-item"> Task 2</li>
            <li class="list-group-item"> Task 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
