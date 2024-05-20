import React, { useState } from "react";
import ImageGallery from "../components/ImageGallery";
import DevImageGallery from "../components/DevImageGallery";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="min-h-screen  mt-16  flex flex-col gap-4">
      <div className="sticky w-[100%] header top-10 z-10 bg-[#1f1345] px-20">
        <div className="flex flex-col gap-4">
          <p className="text-white text-5xl pt-12">My Portfolio</p>
          <p className="text-gray-400 w-1/2">
            I dabble with different things. I may not be the best in them, but
            at the very least, I could say that I tried.
          </p>
        </div>

        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 gap-4 justify-center">
          <li className="me-2">
            <a
              href="#"
              className={`inline-block px-4 py-3 rounded-sm ${
                activeTab === "tab1"
                  ? "text-white bg-red-500 active"
                  : "hover:text-gray-900 hover:bg-red-400 "
              }`}
              onClick={() => handleTabClick("tab1")}
            >
              GRAPHIC DESIGN
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              className={`inline-block px-4 py-3 rounded-sm ${
                activeTab === "tab2"
                  ? "text-white bg-red-500 active"
                  : "hover:text-gray-900 hover:bg-red-400 "
              }`}
              onClick={() => handleTabClick("tab2")}
            >
              DEVELOPMENT
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`inline-block px-4 py-3 rounded-sm ${
                activeTab === "tab3"
                  ? "text-white bg-red-500 active"
                  : "hover:text-gray-900 hover:bg-red-400 "
              }`}
              onClick={() => handleTabClick("tab3")}
            >
              DATA ANALYSIS
            </a>
          </li>
        </ul>
        <hr className="my-2 border-gray-400" />
      </div>

      <div className="px-20">
        {activeTab === "tab1" && <ImageGallery />}
        {activeTab === "tab2" && (
          <div className="text-white">
            <DevImageGallery />
          </div>
        )}
        {activeTab === "tab3" && (
          <div className="text-white">
            <ImageGallery />{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
