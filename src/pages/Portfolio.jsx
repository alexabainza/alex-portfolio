import React, { useState } from "react";
import ImageGallery from "../components/ImageGallery";
import DevImageGallery from "../components/DevImageGallery";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="min-h-screen lg:mt-28 sm:mt-24 mt-24  flex flex-col">
      <div className="sticky w-[100%] header top-10 z-10 bg-[#1f1345] lg:px-20 md:px-16 sm:px-8 px-8">
        <div className="flex flex-col gap-4">
          <p className="lg:text-7xl md:text-5xl sm:text-4xl text-4xl text-justify text-white font-semibold">
            My Portfolio
          </p>
          <p className="text-slate-300 lg:text-2xl md:text-lg sm:text-md text-md text-start">
            I dabble with different things. I may not be the best in them, but
            at the very least, I could say that I tried.
          </p>
        </div>

        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 gap-4 justify-center pt-8">
          <li className="me-2">
            <a
              href="#"
              className={`inline-block px-4 py-3 rounded-sm ${
                activeTab === "tab1"
                  ? "text-white bg-red-500 active"
                  : "hover:text-gray-900 hover:bg-red-400 text-white"
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
                  : "hover:text-gray-900 hover:bg-red-400 text-white"
              }`}
              onClick={() => handleTabClick("tab2")}
            >
              DEVELOPMENT
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
      </div>
    </div>
  );
};

export default Portfolio;
