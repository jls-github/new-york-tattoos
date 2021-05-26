import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light navbar-expand bg-light px-4">
      <a className="navbar-brand" href="/">
        New York Tattoos
      </a>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/artists">
            Artists
          </a>
        </li>
      </ul>
    </nav>
  );
}
