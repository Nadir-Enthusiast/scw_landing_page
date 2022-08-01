import "./Navbar.css"
import React from 'react'
import logo from './logo.jpg'

function Navbar() {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-10vh";
    }
    prevScrollpos = currentScrollPos;
  } 
  return (
    <div id="navbar">
      <img src={logo} alt="" />
      <h2>Social Clusters Web</h2>
      <div className="options">
        <a href="#intro">Home</a>
        <a href="#history">About us</a>
        <a href="#services">Services</a>
        <a href="#call">Contact</a>
      </div>
    </div>
  )
}

export default Navbar