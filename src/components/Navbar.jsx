import React from "react";
import icon from "../assets/Carbs.svg";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <div>
      <nav
        className="bg-[#1f1345] fixed w-full z-20 top-0 start-0 border-b border-gray-600 "
        id="navbar"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/landing"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={icon} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-lg font-regular whitespace-nowrap dark:text-white">
              its<span className="text-[#97EFE9]">aleaf</span>f
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="flex items-center justify-end space-x-3 md:order-2 rtl:space-x-reverse"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-light border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   ">
              <li>
                <Link
                  to="/landing"
                  className="block py-2 px-3 text-sm text-[#97EFE9] bg-blue-700 rounded md:bg-transparent md:text-[#97EFE9] md:p-0 md:dark:text-[#97EFE9]"
                  aria-current="page"
                >
                  home.
                </Link>
              </li>

              <li>
                <Link
                  to="/portfolio"
                  className="block py-2 px-3 text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#97EFE9] md:p-0 md:dark:hover:text-[#97EFE9] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  portfolio.
                </Link>
              </li>
              <li>
                <Link
                  to="/casestudy"
                  className="block py-2 px-3 text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#97EFE9] md:p-0 md:dark:hover:text-[#97EFE9] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  case study.
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
