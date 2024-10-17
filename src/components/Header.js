import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.svg" alt="Learning Resource Hub" className="h-8 w-auto mr-4" />
          <span className="font-bold text-xl text-blue-600">Learning Resource Hub</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/courses" className="text-gray-600 hover:text-blue-600">Courses</Link>
          <Link to="/topics" className="text-gray-600 hover:text-blue-600">Browse Topics</Link>
          <Link to="/profile" className="text-gray-600 hover:text-blue-600">My Profile</Link>
          <Link to="/community" className="text-gray-600 hover:text-blue-600">Community</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          <Link to="/pricing" className="text-gray-600 hover:text-blue-600">Pricing</Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:block flex-grow max-w-md mx-4">
          <input
            type="text"
            placeholder="Search for courses..."
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Login/Sign-Up Buttons */}
        <div className="flex items-center space-x-2">
          <button className="bg-white text-blue-600 px-4 py-2 rounded-full border border-blue-600 hover:bg-blue-100">
            Log In
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
