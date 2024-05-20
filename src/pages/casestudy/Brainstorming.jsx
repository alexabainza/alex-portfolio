import React from "react";
import { Carousel } from "flowbite-react";
import vpup1 from "../../assets/VPUP1.jpg";
import vpup2 from "../../assets/VPUP2.jpg";
import wireframe from "../../assets/wireframe2.png";
import valueproposition from "../../assets/ValueProposition.jpg";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";

const Brainstorming = () => {
  return (
    <div className="h-screen py-16 lg:px-20 md:px-16 sm:px-8 px-8 flex flex-col gap-8 justify-center items-center border-b-2 border-b-gray-500">
      <p className="lg:text-8xl md:text-6xl sm:text-4xl text-4xl text-[#C1D5FE] font-semibold">
        <span className="text-[#C1D5FE] font-semibold">Brainstorming </span>
        Session Outputs
      </p>
      <Link
        to="https://miro.com/app/board/uXjVNr9Qal4=/?share_link_id=596628073627"
        className="flex gap-4 justify-start items-start"
      >
        <FaLink color="white" size={24} />
        <p className="text-gray-300 hover:underline hover:text-white lg:text-2xl md:text-lg sm:text-md text-md">
          {" "}
          View Miro Board here
        </p>
      </Link>
      <div className="lg:w-[60%] md:w-full sm:w-full w-full h-full rounded-2xl bg-white flex ">
        <Carousel slide={false}>
          <img src={valueproposition} alt="Value Proposition" />
          <img src={vpup1} alt="User Personas 1 and 2" />
          <img src={vpup2} alt="User Personas 3 and 4" />
          <img src={wireframe} alt="Prototype Wireframe" />
        </Carousel>
      </div>
    </div>
  );
};

export default Brainstorming;
