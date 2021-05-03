import React from 'react';

// REACT FONTAWESOME IMPORTS 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons"; 
import Header from './Header';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" 
  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
  aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon = {faBars} style= {{color: "#fff"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        
        <Link to="/aboutme" className="nav-link" >About Me</Link>
        
      </li>
      
      <li className="nav-item">
        <Link to="/experiences" className="nav-link" >Experiences</Link>
      </li>
      
      
    </ul>
    
  </div>
  </div>
  
</nav>
    )
}

export default Navbar
