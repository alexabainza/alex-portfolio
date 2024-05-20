import React from "react";
import techwaste from "../../assets/e-waste.jpg";
const ResearchInsights = () => {
  return (
    <div className="lg:px-20 md:px-16 sm:px-4 px-4 min-h-screen flex lg:flex-row md:flex-row sm:flex-col flex-col py-16 lg:gap-16 sm:gap-0 gap-0 border-b-2 border-b-gray-500">
      <div className="lg:w-3/5 sm:w-full w-full flex flex-col gap-8 justify-center p-8 ">
        <p className="lg:text-8xl md:text-6xl sm:text-4xl text-4xl text-white font-semibold">
          Research <span className="text-[#C1D5FE] font-bold">Insights</span>
        </p>
        <p className="text-slate-300 lg:text-lg md:text-md sm:text-md text-md">
          Electronic waste (commonly known as e-waste) is considered as one of
          the largest and most complex waste systems in the world, which is owed
          to the rapid expansion of technology and the consumption driven
          society. (Geneva Environment Network, n.d.). In 2019, the world
          generated an amount of 53.6 Mt of e-waste, but only 17% of that was
          recorded as being collected and recycled. By 2022, this reached 62
          billion kg of e-waste, with only 22.3% of it documented as being
          properly collected.
          <br />
          <br />
          E-waste can pose significant health and environmental hazards if they
          are not treated, disposed of, and recycled appropriately. If e-waste
          is disposed of incorrectly, the hazardous materials can leach into the
          soil and water, contaminating ecosystems and harming wildlife (First
          America, 2024).
          <br />
          <br />
          Experts have cited a variety of reasons as to why recycling rates
          remain low, which include:
          <ol className="list-decimal ml-5">
            <li>
              Lack of techwaste recycling facilities and drop off points in some
              cities and not knowing where these are{" "}
            </li>
            <li>Privacy concerns about accessing old data in those devices</li>
            <li>The lack of knowledge about what can get recycled.</li>
            <li>
              Some big name electronic manufacturers have developed devices that
              are impossible to take apart and repair, and so the owner will
              just buy a newer device instead of having them repaired, even if
              those devices still have parts that can successfully be recycled.
            </li>
          </ol>
        </p>
      </div>
      <img
        src={techwaste}
        className="lg:w-2/5 sm:w-full w-full object-cover rounded-2xl h-screen border-2"
      />
    </div>
  );
};

export default ResearchInsights;
