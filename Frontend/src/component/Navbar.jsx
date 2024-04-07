import React from "react";
import "./style.css";
import { LoginButton } from "./Logs";

export default function Navbar() {
  const scrollToElement = (e) => {
    const element = document.getElementById(e);
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <nav className="navbar px-12 items-center">
      <div className="logo">
        {/* <img src="logo.png" alt="Logo" /> */}
        <h1 className="font-semibold text-2xl tracking-widest">EZ</h1>
      </div>
      <div className="">
        <ul className="nav-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a onClick={() => scrollToElement("about")}>About</a>
          </li>
          {/* <li><a href="#">home</a></li>
                  <li><a href="#">home</a></li> */}
        </ul>
      </div>
      <div className="navbar-right">
        <LoginButton />
      </div>
    </nav>
  );
}
