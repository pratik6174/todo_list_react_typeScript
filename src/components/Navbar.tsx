import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-center space-x-4 my-4">
      <Link to="/" className="text-blue-500 hover:underline">All</Link>
      <Link to="/?todos=active" className="text-blue-500 hover:underline">Active</Link>
      <Link to="/?todos=completed" className="text-blue-500 hover:underline">Completed</Link>
    </nav>
  );
}

export default Navbar;
