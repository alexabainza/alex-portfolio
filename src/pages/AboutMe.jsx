import React from "react";
import FeaturesCard from "../components/FeaturesCard";
import { FaBrush, FaCode, FaHammer } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      className="lg:px-48 md:px-20 sm:px-8 px-8 py-16 min-h-screen bg-[#251a47] flex flex-col justify-center items-center"
      id="about"
    >
      <h1 className="text-white lg:text-8xl md:text-6xl sm:text-5xl text-5xl text-center">
        About <span className="font-semibold text-[#C1D5FE]">Me</span>
      </h1>
      <div class="grid md:grid-cols-3 max-w-screen-lg flex-row gap-10 mt-16 px-2 justify-center">
        <FeaturesCard
          icon={<FaHammer color="#C1D5FE" size={50} />}
          title="Data Engineer"
          description="I mine data from websites which will be used to display information on my own projects."
        />
        <FeaturesCard
          icon={<FaCode color="#C1D5FE" size={50} />}
          title="Developer"
          description="I make full stack websites for school projects and portfolio purposes."
        />
        <FeaturesCard
          icon={<FaBrush color="#C1D5FE" size={50} />}
          title="Designer"
          description="I come up with visually pleasing UI designs and posters that convey the message effectively  to the target audience."
        />
      </div>
    </div>
  );
};

export default AboutMe;
