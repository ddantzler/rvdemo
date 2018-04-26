import React from "react";

import config from "../config/config";

import logo from "../assets/images/pool-pros-logo.png";

// Main site navigation
export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-logo">
        <a href="/">
          <img src={logo} alt="Pool Pros" />
        </a>
      </div>
      <nav className="nav-main">
        {config.nav.map(item => {
          return (
            <a href={item.href} key={item.desc}>
              {item.desc}
            </a>
          );
        })}
      </nav>
      <div className="nav-find">
        <button className="btn-secondary icon-location-before">
          <span className="hidden-tablet">Find a Pool Pro</span>
          <span className="visible-tablet">FIND A PRO</span>
        </button>
      </div>
    </div>
  );
}
