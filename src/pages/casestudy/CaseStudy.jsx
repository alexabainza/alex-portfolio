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

const CaseStudy = () => {
  return (
    <div className="gap-5 mt-16 min-h-screen relative border-b-2 border-b-gray-500">
      <div className="h-screen relative overflow-hidden">
        <div className="h-screen flex flex-col gap-3 justify-start pt-10 relative z-10">
          <h1 className="text-white text-center text-9xl font-semibold">
            Eco
            <span className="text-blue-400">Cycle</span>
          </h1>
          <p className="text-white text-xl text-center">
            Harnessing the power of technology to combat environmental problems
          </p>
          <div className="h-screen flex justify-center items-center flex-wrap gap-10 px-5">
            <img
              src={result}
              className="w-[90%] max-w-[20%] object-contain pt-12"
              alt="Result"
            ></img>
            <img
              src={mockup}
              className="w-[90%] max-w-[30%] object-contain pt-12 mx-5"
              alt="Mockup"
            ></img>
            <img
              src={result}
              className="w-[90%] max-w-[20%] object-contain pt-12"
              alt="Result"
            ></img>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0">
          <img
            src={wave}
            className="w-full object-contain"
            style={{ position: "absolute", bottom: "0" }}
          ></img>
        </div>
      </div>

      <AboutEcoCycle />
      <ProblemStatement />
      <UserPersona />
      <Brainstorming />
      <ResearchInsights />
      <Prototyping />
      <Feedbacking />
      <FinalDesign />
      <Reflection />
    </div>
  );
};

export default CaseStudy;
