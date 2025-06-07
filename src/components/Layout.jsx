import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../styles/Layout.css"

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout-content">{children}</main>
      <Footer />
    </div>
  )
}
export default Layout
