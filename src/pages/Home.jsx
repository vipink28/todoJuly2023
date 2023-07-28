import React from "react";
import illustration from '../assets/illustration.png';

function Home(props) {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-lg-6 d-flex align-items-center justify-content-center h-100 bg-primary text-white flex-column text-center">
          <h1 className="display-3 title">
            An App to
            <br />
            make your life
            <br />
            <span className="display-1">easy</span>
          </h1>

        <img src={illustration} className="img-fluid mt-3" alt="illustration" />

        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center h-100">

            <div className="card">
                <div className="card-body">
                    <Login />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
