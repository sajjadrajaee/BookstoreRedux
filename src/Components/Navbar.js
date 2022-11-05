import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navTitle">Bookstore</h1>
      <nav className="navLinks">
        <Link className="navItem" to="/">Books</Link>
        {' '}
        |
        {' '}
        <Link className="navItem" to="/categories">Categories</Link>
      </nav>
    </div>
  );
}
