import React from "react"
import "../styles/Navbar.css"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link to="/" className="footer-logo">
          MyApp
        </Link>
        <ul className="footer-menu">
          <li className="footer-item">
            <Link to="/about" className="footer-links">
              About
            </Link>
          </li>
          <li className="footer-item">
            <Link to="/contact" className="footer-links">
              Contact
            </Link>
          </li>
          <li className="footer-item">
            <Link to="/recipes" className="footer-links">
              Recipes
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
