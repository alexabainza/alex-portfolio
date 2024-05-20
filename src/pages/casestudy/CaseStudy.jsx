import React from "react";
import mockup from "../../assets/ecocycle-mockup.png";
import AboutEcoCycle from "./AboutEcoCycle";
import ewastebg from "../../assets/ewaste-bg.jpg";
import result from "../../assets/shopresult.png";
import wave from "../../assets/wave1.png";
import Prototyping from "./Prototyping";
import UserPersona from "./UserPersona";
import UserTesting from "./UserTesting";
import Reflection from "./Reflection";
import FinalDesign from "./FinalDesign";
import ResearchInsights from "./ResearchInsights";
import ProblemStatement from "./ProblemStatement";
import Brainstorming from "./Brainstorming";
import Feedbacking from "./Feedbacking";
import Impact from "./Impact";

const CaseStudy = () => {
  return (
    <div className="gap-5 mt-16 min-h-full w-full">
      <div className=" overflow-hidden border-b-2 border-b-gray-500">
        <div className="h-screen flex flex-col gap-3 justify-start pt-10 relative z-10">
          <p className="lg:text-8xl md:text-6xl sm:text-4xl text-4xl text-white font-semibold text-center">
            <span className="font-bold">
              Eco<span className="text-[#C1D5FE]">Cycle</span>
            </span>
          </p>
          <p className="text-white lg:text-xl md:text-lg sm:text-md text-md text-center">
            Harnessing the power of technology to combat environmental problems
          </p>
          <div className="h-screen flex sm:flex-col flex-col justify-center items-center flex-wrap lg:gap-10 md:gap-5 sm:gap-2 gap-2 px-5">
            <img
              src={result}
              className="w-[90%] max-w-[20%] object-contain pt-12 sm:hidden hidden"
              alt="Result"
            ></img>
            <img
              src={mockup}
              className="lg:max-w-[30%] object-contain lg:pt-12 md:pt-8 sm:pt-4 pt-4 mx-5 sm:w-[90%] w-[90%]"
              alt="Mockup"
            ></img>
            <img
              src={result}
              className="w-[90%] max-w-[20%] object-contain pt-12 sm:hidden hidden"
              alt="Result"
            ></img>
          </div>
        </div>
      </div>

      <AboutEcoCycle />
      <ResearchInsights />
      <ProblemStatement />
      <UserPersona />
      <Brainstorming />
      <Prototyping />
      <Feedbacking />
      <FinalDesign />
      <Impact />
      <Reflection />
    </div>
  );
};

export default CaseStudy;
