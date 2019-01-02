import React, { Component } from 'react'
// import './MyNavBar.css'
import { Link } from "react-router-dom";

class MyNavBar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="nav-wrapper purple darken-4 col s1">
          <Link to='/' className=" brand-logo " style={{ textDecoration: 'none', color: "white" }}>Charitable</Link>
          <ul className=" right"  >
            <li><Link to="/" style={{ textDecoration: 'none', color: "white" }}>Home</Link></li>
            <li><Link to="/Organizations" style={{ textDecoration: 'none', color: "white" }}>Organizations</Link></li>
            <li><Link to="/Signup" style={{ textDecoration: 'none', color: "white" }}>Sign Up</Link></li>
            <li><Link to="/Signin" style={{ textDecoration: 'none', color: "white" }}>Sign In</Link></li>
            <li><Link to="/profile" style={{ textDecoration: 'none', color: "white" }}>Profile</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}
export default MyNavBar;