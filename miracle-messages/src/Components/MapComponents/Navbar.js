import React from "react"
import logo from "../../Assets/Imgs/MM_Logo.png"
import "./Navbar.scss"
import { Link } from 'react-router-dom';

// search bar component
import SearchBar from "../MapComponents/SearchBar.js"

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-map">
        <a href="https://miraclemessages.org/">
          <img src={logo} alt="logo" />
        </a>
        <nav>
          <div className="search-bar">
            <a className="drop-search"> Search </a>
            <div className="dropdown-search">
              <SearchBar />
            </div>
          </div>
          <div style={{ margin: "15px" }}> </div>
          <a href="https://miraclemessages.org/">HOME</a>
          <a href="https://miraclemessages.org/who">ABOUT</a>
          <a href="https://miraclemessages.org/partner">REUNION SERVICE</a>

          <div className="dropdown">
            <a className="dropbtn">GET INVOLVED</a>
            <div className="dropdown-content">
              <Link to="/form">
                Volunteer Registration
              </Link>
              <Link to="/user/login">
                Volunteer Login
              </Link>
              <Link to="/admin/login">
                Admin Login
              </Link>
              <Link className="not-last-child">test</Link>
            </div>
          </div>

          <a href="https://www.classy.org/give/231839/#!/donation/checkout">
            DONATE
          </a>
        </nav>
      </div>
    )
  }
}

export default Navbar
