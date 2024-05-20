import React from "react";

const ProblemStatement = () => {
  return (
    <div className="lg:px-20 md:px-16 sm:px-8 px-8 min-h-screen flex lg:flex-row md:flex-row sm:flex-col flex-col py-16 gap-8 justify-center border-b-2 border-b-gray-500">
      <div className="flex flex-col lg:w-[50%] md:w-[50%] sm:w-full w-full rounded-2xl bg-[#3A2B6D] lg:p-16 md:p-12 sm:p-8 p-8 gap-8">
        <h1 className="text-white text-center lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-semibold">
          Problem <span className="text-[#C1D5FE]">Statement</span>
        </h1>
        <p className="lg:text-xl md:text-lg sm:text-md text-md text-slate-300 text-center">
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
      <div className="flex flex-col lg:w-[50%] md:w-[50%] sm:w-full w-full rounded-2xl bg-[#3A2B6D] lg:p-16 md:p-12 sm:p-8 p-8  gap-8 text-white">
        <h1 className="text-slate-300 text-center lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-semibold">
          <span className="text-[#C1D5FE]">Objectives</span>
        </h1>
        <p className="lg:text-xl md:text-lg sm:text-md text-md text-slate-300 text-center">
          The EcoCycle E-waste Management App aims to:
          <br />
          <br />
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
