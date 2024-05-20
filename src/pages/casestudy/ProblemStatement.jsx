import React from "react";

const ProblemStatement = () => {
  return (
    <div className="px-20 min-h-screen flex py-16 gap-8 justify-center border-b-2 border-b-gray-500">
      <div className="flex flex-col w-[50%] rounded-2xl bg-[#3A2B6D] p-12 gap-8">
        <h1 className="text-white text-5xl font-semibold text-center">
          Problem <span className="text-[#C1D5FE]">Statement</span>
        </h1>
        <p className="text-white text-center text-lg">
          The major challenges surrounding the management of e-waste in the
          Philippines are the unavailability of accurate estimates of quantities
          of total e-waste generation and a low level of awareness among
          consumers about the health hazards and environmental impact of
          improper e-waste disposal. The Filipino population largely stores
          their electronic gadgets such as cellular phones, laptops, and
          personal computers, once the models become old and obsolete. The other
          most popular disposal method is selling the gadgets to junk shops. The
          application, “Ecocycle” aims to improve e-waste management by
          providing a platform for users to coordinate with electronic shops and
          other users looking for second-hand or discontinued devices, or
          electronic parts. EcoCycle also aims to spread awareness regarding
          e-waste, its dangers, and its management.
        </p>
      </div>
      <div className="flex flex-col w-[50%] rounded-2xl bg-[#3A2B6D] p-12 gap-8 text-white">
        <h1 className=" text-5xl font-semibold text-center">
          <span className="text-[#C1D5FE]">Objectives</span>
        </h1>
        <p className="text-lg">
          The EcoCycle E-waste Management App aims to:
          <ol className="list-decimal ml-5">
            <li>
              Allow users to throw their broken electronic devices into the
              proper disposal facilities and not have it be mixed in with the
              normal waste bins
            </li>
            <li>
              Promote sustainability by allowing broken electronic devices to be
              recycled again through calls for donation by various users (i.e.
              shop keepers, regular users, project makers)
            </li>
            <li>
              Allow users to know how to properly dismantle broken e-waste
              devices so that they may still recycle and reuse parts that are
              still working
            </li>
          </ol>
        </p>
      </div>
    </div>
  );
};

export default ProblemStatement;
