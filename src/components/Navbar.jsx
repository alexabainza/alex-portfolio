import React from "react";
import icon from "../assets/Carbs.svg";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav class=" bg-[#1f1345] fixed w-full z-20 top-0 start-0 border-b-2 border-b-gray-500 border-gray-">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={icon} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-lg text-white font-regular whitespace-nowrap ">
            its<span className="text-[#97EFE9]">aleaf</span>f
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-light border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   ">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 text-sm text-white rounded 
             ${location.pathname === "/" ? "active" : ""} hover:text-[#97EFE9]`}
                aria-current="page"
              >
                home.
              </Link>
            </li>

            <li>
              <Link
                to="/portfolio"
                className={`block py-2 px-3 text-sm text-white rounded 
             ${
               location.pathname === "/portfolio" ? "active" : ""
             } hover:text-[#97EFE9]`}
                aria-current="page"
              >
                portfolio.
              </Link>
            </li>
            <li>
              <Link
                to="/casestudy"
                className={`block py-2 px-3 text-sm text-white rounded 
             ${
               location.pathname === "casestudy" ? "active" : ""
             } hover:text-[#97EFE9]`}
                aria-current="page"
              >
                case study.
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
