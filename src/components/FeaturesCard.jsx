import React from "react";

const FeaturesCard = ({ title, description, icon }) => {
  return (
    <div class="flex gap-8  flex-col bg-[#3A2B6D] py-16 px-10 rounded-xl min-h-[60vh] ">
      <div className="flex justify-center ">{icon}</div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <h3 class="font-semibold text-2xl text-white text-center"> {title}</h3>
        <p class="mt-1 text-gray-300 text-center">{description}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
