import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  const [isMobileMenuOpen, SetIsMobileMenuOpen] = useState(false)
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)


  return (
    <nav className="bg-white-100 shadow">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => SetIsMobileMenuOpen(!isMobileMenuOpen)}
            >

              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Link to="#" className="rounded-md bg-gray-200 px-3 py-2 text-sm font-medium text-gray-700" aria-current="page">
                  Dashboard
                </Link>
                <Link to={'/home'} className="rounded-md px-3 py-2 text-sm font-medium bg-blue-50 hover:bg-blue-300 hover:text-white">
                  Home
                </Link>
                <Link to={'/login'} className="rounded-md px-3 py-2 text-sm font-medium bg-blue-50 hover:bg-blue-300 hover:text-white">
                  Login
                </Link>
                <Link to={'/register'} className="rounded-md px-3 py-2 text-sm font-medium bg-blue-50 hover:bg-blue-300 hover:text-white">
                  Register
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-200 p-1 text-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-200"
            >
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>

            {/* Profile dropdown */}
            <div className="relative ml-3">
              <button
                type="button"
                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                />
              </button>

              {/* Dropdown menu */}
              {isDropDownOpen && (<div
                className=" absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
              >
                <Link to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                  Your Profile
                </Link>
                <Link to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                  Settings
                </Link>
                <Link to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                  Sign out
                </Link>
              </div>)}

            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {
        isMobileMenuOpen && (<div className="sm:hidden transition-transform duration-300 transform ease-in-out" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link to="#" className="block rounded-md bg-gray-200 px-3 py-2 text-base font-medium text-white"  aria-current="page">
              Dashboard
            </Link>
            <Link to="#" className="block rounded-md px-3 py-2 text-base font-medium bg-blue-50 hover:bg-gray-700 hover:text-white">
              Team
            </Link>
            <Link to="#" className="block rounded-md px-3 py-2 text-base font-medium bg-blue-50 hover:bg-gray-700 hover:text-white">
              Projects
            </Link>
            <Link to="#" className="block rounded-md px-3 py-2 text-base font-medium bg-blue-50 hover:bg-gray-700 hover:text-white">
              Calendar
            </Link>
          </div>
        </div>)}

    </nav>
  );
}

export default Navbar;
