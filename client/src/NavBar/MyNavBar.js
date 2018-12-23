import React, { Component } from 'react'
// import './MyNavBar.css'
import { Link, NavLink } from "react-router-dom";

class MyNavBar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="nav-wrapper purple darken-4 ">
          <Link to='/' className=" brand-logo " style={{ textDecoration: 'none' }}>Core I4</Link>
          <ul className="right" >
            <li><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
            <li><Link to="/Organizations" style={{ textDecoration: 'none' }}>Organizations</Link></li>
            <li><Link to="/Contact" style={{ textDecoration: 'none' }}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}
export default MyNavBar;