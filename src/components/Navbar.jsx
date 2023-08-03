import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar(props) {
    const [user, setUser]= useState();

    // use effect is used to execute something when component is loaded.
    useEffect(()=>{
      const localuser = localStorage.getItem("user");     
      if(localuser){
        let user = JSON.parse(localuser);
        setUser(user);
      }
    }, [])

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="todo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/create-task">Create Task</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/task-list">Task List</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>            

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown" aria-expanded="false">{user?.name}</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>
            </ul>        
          </div>
        </div>
      </nav>
    );
}

export default Navbar;