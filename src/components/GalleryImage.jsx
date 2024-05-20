import React from "react";
import apptive from "../assets/ApptiveMain.png";
import { FaCode, FaBrush, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const GalleryImage = ({ details }) => {
  return (
    <div class="grid grid-cols-1 h-[100%] py-10">
      <div className="flex lg:flex-row sm:flex-col flex-col gap-8 pt-3">
        <div className="gallery-image relative lg:w-[50%] sm:w-full w-full">
          <img
            class="object-cover rounded-lg border-2 border-red-400 "
            src={details.image}
            alt=""
          />
          <div class="absolute inset-0 bg-[#5a5567] flex justify-center items-center opacity-0 hover:opacity-90 transition-opacity rounded-lg">
            <Link
              to={details.demo_link}
              class="text-white text-4xl flex hover:underline gap-4"
            >
              <FaPlay />
              View Demo Here
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-5 lg:w-[60%] sm:w-full w-full">
          <h2 className="text-red-400 text-start lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-semibold">
            {details.title}
          </h2>
          <p className="lg:text-xl md:text-md sm:text-md text-md mb-5">
            {details.description}
          </p>
          <div className="flex flex-col gap-3 text-xl">
            <Link
              to={details.figma_link}
              className="gap-3 text-gray-400 hover:text-gray-100 flex items-center"
            >
              <FaBrush size={20} color="white" className="hover:white" />
              View the UI here
            </Link>
            <Link
              to={details.github_link}
              className="gap-3 text-gray-400 flex align-middle justify-center items-center hover:text-white items-center"
            >
              <FaCode size={20} color="white" className="hover:white" />
              View code here
            </Link>
          </div>
          <div className="flex flex-wrap mt-3">
            {details.category.map((cat, index) => (
              <span class="bg-pink-100 mb-4 text-blue-500 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryImage;
