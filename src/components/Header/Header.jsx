import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <a href="https://ibb.co/5vvCDF1">
              <img src="https://i.ibb.co/tccnfXH/logo01.jpg" className="m-1.5 rounded-full height h-20 w-30" alt="Logo" border="0" />
            </a>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
            <div className="flex flex-col mt-2 space-y-2">
              <NavLink
                to="/"
                className="block px-4 py-2 text-gray-600 hover:text-orange-700"
                activeClassName="text-orange-600"
                exact
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="block px-4 py-2 text-gray-600 hover:text-orange-700"
                activeClassName="text-orange-600"
              >
                About
              </NavLink>
              <NavLink
                to="/contactus"
                className="block px-4 py-2 text-gray-600 hover:text-orange-700"
                activeClassName="text-orange-600"
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/register"
                className="mb-2 block px-4 py-2 text-white bg-orange-700 hover:bg-orange-800"
              >
                Register
              </NavLink>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-5">
            <ul className="flex font-medium space-x-5">
              <li>
                <NavLink
                  to="/"
                  className="text-gray-600 hover:text-orange-700"
                  activeClassName="text-orange-600"
                  exact
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-gray-600 hover:text-orange-700"
                  activeClassName="text-orange-600"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contactus"
                  className="text-gray-600 hover:text-orange-700"
                  activeClassName="text-orange-600"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <NavLink
              to="/register"
              className="text-white bg-orange-700 hover:bg-orange-800 px-5 py-2 rounded-lg text-sm"
            >
              Register
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
