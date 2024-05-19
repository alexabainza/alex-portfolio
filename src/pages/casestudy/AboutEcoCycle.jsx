import React from "react";
import landingimage from "../../assets/landingimage.png";
const AboutEcoCycle = () => {
  return (
    <div className="text-white w-full flex flex-row gap-5 h-screen p-20 border-b-2 border-b-gray-500 justify-center items-center">
      <div className="w-2/3 gap-6 flex flex-col p-12">
        <p className="text-7xl text-justify ">
          About{" "}
          <span className="font-bold">
            Eco<span className="text-[#C1D5FE]">Cycle</span>
          </span>
        </p>
        <p className="text-xl text-slate-300">
          The idea behind this ideation portfolio is designed to address the
          growing concern of electronic waste (e-waste) management in the
          country. In this era where people rely on their electronic devices to
          do even the most simple task, the accumulation of electronic waste has
          become a pressing issue worldwide, as improper disposal of these
          devices poses a significant threat to the environment.
          <br />
          <br />
          This app prototype aims to empower users to dispose of their
          electronics properly. By giving them a platform where they could
          easily find places and projects that accept used electronic parts, and
          also allowing them to connect with like-minded people and contribute
          to their projects, the app fosters a culture of environmental
          stewardship, and encourages sustainable practices. We leverage the
          power of technology to address the challenges surrounding the proper
          use and disposal of electronic devices, for a cleaner, greener,
          future.
        </p>
      </div>
      <div className="w-1/3 flex justify-center">
        <img className="object-cover h-[50%] w-[60%]" src={landingimage}></img>
      </div>
    </div>
  );
};

export default AboutEcoCycle;
