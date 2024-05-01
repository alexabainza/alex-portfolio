import React from "react";
import apptive from "../assets/ApptiveMain.png";
import { FaCode, FaBrush, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const GalleryImage = ({ details }) => {
  return (
    <div class="grid grid-cols-1 h-[100%] ">
      <div className=" flex flex-row gap-8 pt-3">
        <div className="gallery-image relative h-100">
          <img
            class="object-cover rounded-lg border-2 border-red-400"
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

        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-6xl font-semibold text-red-400">
            {details.title}
          </h1>
          <p className="text-white mb-5">{details.description}</p>
          <div className="flex flex-col gap-3">
            <Link
              to={details.figma_link}
              className="gap-3 text-gray-400 hover:text-gray-100 flex"
            >
              <FaBrush style={{ color: "white", fontSize: "18px" }} />
              View the UI here
            </Link>
            <Link
              to={details.github_link}
              className="gap-3 text-gray-400 flex align-middle justify-center items-center hover:text-white"
            >
              <FaCode style={{ color: "white", fontSize: "18px" }} />
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
