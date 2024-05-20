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
    <div className="h-screen py-16 px-20 flex flex-col gap-8 justify-center items-center border-b-2 border-b-gray-500">
      <h1 className="text-white text-6xl font-semibold text-center">
        <span className="text-[#C1D5FE]">Brainstorming </span>Session Outputs
      </h1>
      <Link
        to="https://miro.com/app/board/uXjVNr9Qal4=/?share_link_id=596628073627"
        className="flex gap-4"
      >
        <FaLink color="white" size={24} />
        <p className="text-white hover:underline text-xl">
          {" "}
          View Miro Board here
        </p>
      </Link>
      <div className="w-[60%] h-full rounded-2xl bg-white flex ">
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
