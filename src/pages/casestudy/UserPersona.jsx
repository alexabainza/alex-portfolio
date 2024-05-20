import { Flowbite } from "flowbite-react";
import { Carousel } from "flowbite-react";

import up1 from "../../assets/UP1.png";
import up2 from "../../assets/UP2.png";
import up3 from "../../assets/UP3.png";
import up4 from "../../assets/UP4.png";

const UserPersona = () => {
  return (
    <div className=" lg:px-20 md:px-16 sm:px-8 px-8  min-h-screen flex lg:flex-row md:flex-row sm:flex-col flex-col py-16 lg:gap-16 sm:gap-0 gap-0 border-b-2 border-b-gray-500">
      <div className=" lg:w-2/5 sm:w-full w-full flex flex-col gap-5 justify-center align-middle">
        <p className="lg:text-8xl md:text-6xl sm:text-4xl text-4xl text-white font-semibold">
          User <span className="text-[#C1D5FE] font-bold">Persona</span>
        </p>
        <p className="text-slate-300 lg:text-2xl md:text-lg sm:text-md text-md text-start">
          In this section of the ideation portfolio, we introduce the User
          Personas, which serve as the fictional personification of the target
          audience of EcoCycle.
        </p>
      </div>

      <div className="h-screen lg:w-3/5 sm:w-full w-full ">
        <Carousel slide={false}>
          <img src={up1} alt="..." />
          <img src={up2} alt="..." className="" />
          <img src={up3} alt="..." />
          <img src={up4} alt="..." />
        </Carousel>
      </div>
    </div>
  );
};

export default UserPersona;
