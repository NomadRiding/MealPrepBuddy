import React from "react"
import "../styles/Navbar.css"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          MyApp
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/recipes" className="nav-links">
              Recipes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
