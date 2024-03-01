import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <a href="https://ibb.co/5vvCDF1">
              <img src="https://i.ibb.co/tccnfXH/logo01.jpg" className="m-1.5 rounded-full height h-20 w-30" alt="Logo" border="0" />
            </a>
          </Link>

          <div className="flex items-center lg:order-2 ml-4">
            <NavLink
              to="register"
              className="  hover:bg-white hover:text-black border-solid hover:border-2 border-black text-white bg-orange-700 hover:bg-orange-800 focus:ring-4font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Register
            </NavLink>
          </div>

          <div className="flex items-center lg:order-1 lg:ml-auto space-x-5">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:mt-0 space-y-2 lg:space-y-0 lg:space-x-5">
              <li>
                <NavLink
                  to="/"
                  className={ ({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${ isActive ? "text-orange-600" : "text-gray-600" } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="about"
                  className={ ({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${ isActive ? "text-orange-600" : "text-gray-600" } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="contactus"
                  className={ ({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${ isActive ? "text-orange-600" : "text-gray-600" } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
