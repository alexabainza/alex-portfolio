import React from "react";
import mockup from "../../assets/ecocycle-mockup.png";
import AboutEcoCycle from "./AboutEcoCycle";
import ewastebg from "../../assets/ewaste-bg.jpg";

const CaseStudy = () => {
  return (
    <div className="gap-5 min-h-screen relative">
      <div className="relative">
        <img
          src={ewastebg}
          className="h-screen w-full object-cover"
          alt="Background"
        ></img>
        <div className="absolute inset-0 bg-blue-900 opacity-70 " />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 justify-center items-center align-middle">
          <h1
            className=" text-9xl  text-white font-semibold text-center"
            style={{
              fontSize: 180,
            }}
          >
            Eco
            <span className="text-blue-300">Cycle</span>
          </h1>
          <p className="text-white text-2xl text-center mt-5">
            Harnessing the power of technology to come up with solutions for
            environmental problems
          </p>
          <button class=" bg-blue-500 hover:bg-blue-200 text-white py-2 px-4 rounded-lg w-[50%] mt-2">
            Learn More
          </button>
        </div>
      </div>

      <div className="w-full flex flex-row mt-20 min-h-screen items-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-9xl text-white border-2">EcoCycle</h1>
          <p className="text-xl w-3/4">
            Harnessing the power of technology to come up with solutions for
            environmental problems
          </p>
          <button
            type="button"
            className="text-white bg-[#97EFE9] w-1/3 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Get to know us
          </button>
        </div>
        <img src={mockup} className="h-screen w-1/4" alt="Mockup"></img>
      </div>
      <AboutEcoCycle />
    </div>
  );
};

export default CaseStudy;
