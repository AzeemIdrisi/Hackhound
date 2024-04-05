import React from 'react'
import "./style.css"

export default function Navbar() {
  return (
    <><nav class="navbar">
          <div class="navbar-left">
              <div class="logo">
                  <img src="logo.png" alt="Logo"></img>
              </div>
              <ul class="nav-list">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Contact</a></li>
              </ul>
          </div>
          <div class="navbar-right">
              <button class="btn">Login</button>
              <button class="btn">Sign Up</button>
          </div>
      </nav><div class=''>
              <h1 class=''>hello
              </h1>
          </div></>
    
  )
}
