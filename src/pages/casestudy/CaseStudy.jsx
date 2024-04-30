import React from "react";
import mockup from "../../assets/ecocycle-mockup.png";
import AboutEcoCycle from "./AboutEcoCycle";

const CaseStudy = () => {
  return (
    <div className="px-20 gap-5 min-h-screen">
      <div className="w-full flex flex-row mt-20 min-h-screen items-center">
        <div className=" text-white w-3/4 flex flex-col align-center gap-3">
          <h1 className="text-9xl text-white">EcoCycle</h1>
          <p className="text-xl w-3/4">
            Harnessing the power of technology to come up with solutions for
            environmental problems
          </p>
          <button
            type="button"
            class="text-white bg-[#97EFE9] w-1/3 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
          >
            Get to know us
          </button>
        </div>
        <img src={mockup} className="h-screen w-1/4"></img>
      </div>
      <AboutEcoCycle />
    </div>
  );
};

export default CaseStudy;
