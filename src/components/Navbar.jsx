import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import AuthContext from '../context/AuthContext';

function Navbar(props) {
    const { user, logout }= useContext(AuthContext);
  
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
            {
              !user ?
              <>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              </>
              :
              <>
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
                  <li className="dropdown-item" onClick={logout}>Logout</li>
                </ul>
              </li>
              </>
              }
            </ul>        
          </div>
        </div>
      </nav>
    );
}

export default Navbar;