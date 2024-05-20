import React from "react";
import { Carousel } from "flowbite-react";
import fb1 from "../../assets/feedback/fb1.gif";
import fb2 from "../../assets/feedback/fb2.gif";
import fb3 from "../../assets/feedback/fb3.gif";
import fb4 from "../../assets/feedback/fb4.gif";
import fb5 from "../../assets/feedback/fb5.gif";
import fb6 from "../../assets/feedback/fb6.gif";
import fb7 from "../../assets/feedback/fb7.gif";
import fb8 from "../../assets/feedback/fb8.gif";
import fb9 from "../../assets/feedback/fb9.gif";
import fb10 from "../../assets/feedback/fb10.gif";

const Impact = () => {
  return (
    <div className="min-h-screen py-16 lg:px-20 md:px-16 sm:px-8 px-8 flex flex-col gap-2 border-b-2 border-b-gray-500">
      <h1 className="lg:text-8xl md:text-6xl sm:text-4xl text-4xl text-[#C1D5FE] font-semibold ">
        Impact and Results
      </h1>
      <div className="flex lg:flex-row sm:flex-col flex-col lg:gap-20 sm:gap-4 gap-4 align-middle items-center">
        <p className="text-gray-300 lg:text-2xl md:text-lg sm:text-md text-md lg:w-1/4 sm:w-full w0-full">
          Listed below are the statistical data on how our respondents felt
          about our prototype.
        </p>
        <div className="lg:w-3/4 md:w-full sm:w-full w-full h-screen rounded-2xl flex">
          <Carousel slide={false}>
            <img src={fb1} alt="..." />
            <img src={fb2} alt="..." />
            <img src={fb3} alt="..." />
            <img src={fb4} alt="..." />
            <img src={fb5} alt="..." />
            <img src={fb6} alt="..." />
            <img src={fb7} alt="..." />
            <img src={fb8} alt="..." />
            <img src={fb9} alt="..." />
            <img src={fb10} alt="..." />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Impact;
