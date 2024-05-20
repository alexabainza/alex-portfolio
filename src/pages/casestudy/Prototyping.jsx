import React from "react";
import p1 from "../../assets/prototype_v1.jpg";
import p2 from "../../assets/prototype_v2.png";
import p3 from "../../assets/prototype_v3.jpg";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

import "flowbite";

const Prototyping = () => {
  return (
    <div className="min-h-screen py-16 lg:px-20 md:px-16 sm:px-8 px-8 flex flex-col gap-8 justify-start border-b-2 border-b-gray-500">
      <p className="lg:text-8xl md:text-6xl sm:text-4xl text-4xl text-[#C1D5FE] font-semibold">
        Prototyping
      </p>
      <p className="text-slate-300 lg:text-2xl md:text-lg sm:text-md text-md ">
        For this application, we were able to come up with three designs, as we
        felt like while the first two designs give off care for the environment
        vibes, it does not really catch the technological aspect of the purpose
        of our app.
      </p>
      <Link
        to="https://www.figma.com/proto/VOV2ISNrdm4jVqDPnVvxdY/Design-Project?node-id=488-7110&t=hcnBw9oWye7mP2x0-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=488%3A7110&show-proto-sidebar=1"
        className="flex gap-4 justify-start"
      >
        <FaLink color="white" size={24} />
        <p className="text-gray-300 hover:underline hover:text-white lg:text-2xl md:text-lg sm:text-md text-md">
          {" "}
          View EcoCycle prototype here
        </p>
      </Link>
      <div className="flex items-center lg:flex-row md:flex-row sm:flex-col flex-col">
        <div className="flex p-4 flex-col lg:w-1/2 sm:w-full w-full gap-4">
          <p className="lg:text-3xl md:text-2xl sm:text-xl text-xl text-[#C1D5FE] font-semibold">
            1. Version 1
          </p>
          <img class="h-auto max-w-full rounded-lg" src={p1} alt="" />
        </div>
        <div className="flex flex-col p-4  lg:w-1/2 sm:w-full w-full gap-12">
          <div className="flex flex-col gap-4">
            <p className="lg:text-3xl md:text-2xl sm:text-xl text-xl text-[#C1D5FE] font-semibold">
              2. Version 2
            </p>
            <img class="h-auto max-w-full rounded-lg" src={p2} alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="lg:text-3xl md:text-2xl sm:text-xl text-xl text-[#C1D5FE] font-semibold">
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
