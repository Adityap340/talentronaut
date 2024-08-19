// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-white text-lg font-semibold transition-transform transform hover:scale-105"
        >
          Animation 1
        </Link>
        <Link
          to="/ani2"
          className="text-white text-lg font-semibold transition-transform transform hover:scale-105"
        >
          Animation 2
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
