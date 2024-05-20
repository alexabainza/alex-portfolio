import React from "react";
import p1 from "../../assets/prototype_v1.jpg";
import p2 from "../../assets/prototype_v2.png";
import p3 from "../../assets/prototype_v3.jpg";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

import "flowbite";

const Prototyping = () => {
  return (
    <div className="min-h-screen py-16 px-20 flex flex-col justify-center gap-8 border-b-2 border-b-gray-500">
      <h1 className="text-6xl text-[#C1D5FE] text-center font-bold">
        Prototyping
      </h1>
      <p className="text-white text-xl text-center">
        For this application, we were able to come up with three designs, as we
        felt like while the first two designs give off care for the environment
        vibes, it does not really catch the technological aspect of the purpose
        of our app.
      </p>
      <Link
        to="https://www.figma.com/proto/VOV2ISNrdm4jVqDPnVvxdY/Design-Project?node-id=488-7110&t=hcnBw9oWye7mP2x0-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=488%3A7110&show-proto-sidebar=1"
        className="flex gap-4 justify-center"
      >
        <FaLink color="white" size={24} />
        <p className="text-white hover:underline text-xl">
          {" "}
          View EcoCycle prototype here
        </p>
      </Link>
      <div className="flex items-center ">
        <div className="flex p-4 flex-col w-1/2 gap-4">
          <p className="text-3xl text-[#C1D5FE] font-semibold">1. Version 1</p>
          <img class="h-auto max-w-full rounded-lg" src={p1} alt="" />
        </div>
        <div className="flex flex-col p-4  w-1/2 gap-12">
          <div className="flex flex-col gap-4">
            <p className="text-3xl text-[#C1D5FE] font-semibold">
              2. Version 2
            </p>
            <img class="h-auto max-w-full rounded-lg" src={p2} alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-3xl text-[#C1D5FE] font-semibold">
              3. Version 2
            </p>
            <img class="h-auto max-w-full rounded-lg" src={p3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prototyping;
