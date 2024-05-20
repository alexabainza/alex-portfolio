import React from "react";
import FeaturesCard from "../components/FeaturesCard";

const AboutMe = () => {
  return (
    <div
      className="px-20 h-screen bg-[#6F4A95] flex flex-col justify-center items-center"
      id="about"
    >
      <h1 className="text-white text-6xl text-center">
        About <span className="font-semibold text-[#07BFFB]">Me</span>
      </h1>
      <div class="grid md:grid-cols-3 max-w-screen-lg flex-row gap-10 mt-16 px-2 justify-center">
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
      </div>
    </div>
  );
};

export default AboutMe;
