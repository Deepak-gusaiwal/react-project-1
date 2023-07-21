import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="container headerContainer">
        <a href="/" className="logoBox">
          <img src="/img/brand_logo.png" alt="brand_logo" />
        </a>

        <ul className="menu">
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Location</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>

        <button className="btn-primary">login</button>
      </div>
    </header>
  );
};

export default Navbar;
