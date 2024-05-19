import { Flowbite } from "flowbite-react";
import { Carousel } from "flowbite-react";

import up1 from "../../assets/UP1.png";
import up2 from "../../assets/UP2.png";
import up3 from "../../assets/UP3.png";
import up4 from "../../assets/UP4.png";

const UserPersona = () => {
  return (
    <div className="px-20 h-screen flex py-16 gap-8 justify-center border-b-2 border-b-gray-500">
      <div className=" h-[90%] w-2/5 flex flex-col gap-5 justify-center align-middle-4">
        <h1 className="text-white text-start text-7xl font-semibold">
          User <span className="text-[#C1D5FE]">Persona</span>
        </h1>
        <p className="text-white text-start text-xl">
          In this section of the ideation portfolio, we introduce the User
          Personas, which serve as the fictional personification of the target
          audience of EcoCycle.
        </p>
      </div>

      <div className="h-[90%] w-3/5">
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
