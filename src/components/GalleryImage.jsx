import React from "react";
import apptive from "../assets/ApptiveMain.png";
import { FaCode, FaBrush } from "react-icons/fa";
import { Link } from "react-router-dom";

const GalleryImage = ({ details }) => {
  return (
    <div class="grid grid-cols-1 h-[100%] ">
      <div className=" flex flex-row gap-8 pt-3">
        <img
          class="gallery-image h-100 w-[75%] object-cover rounded-lg border-2 border-red-400"
          src={details.image}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-5xl">{details.title}</h1>
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
        </div>
      </div>
    </div>
  );
};

export default GalleryImage;
