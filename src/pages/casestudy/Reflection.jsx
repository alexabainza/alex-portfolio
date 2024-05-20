import { Accordion } from "flowbite-react";
import React from "react";

const Reflection = () => {
  return (
    <div className="lg:px-20 md:px-16 sm:px-8 px-8  min-h-screen flex lg:flex-col md:flex-row sm:flex-col flex-col py-16 border-b-2 border-b-gray-500 gap-5">
      <p className="lg:text-8xl md:text-6xl sm:text-4xl text-4xl text-[#C1D5FE] font-semibold">
        Reflection
      </p>
      <div className="flex flex-wrap gap-8">
        <div className="flex flex-col gap-4 rounded-lg bg-[#3A2B6D]  p-10">
          <h2 className="text-white text-start lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-semibold">
            What worked well:
          </h2>
          <p className="text-slate-300 text-start lg:text-lg md:text-md sm:text-md text-md">
            {" "}
            One thing that struck me most while I was doing the prototype is
            that there is still so much to improve on, not just after doing the
            feedback, but even while making the prototype. I was already done
            with making the first design, but then realized that the colors only
            fitted the environmental sustainability purpose of the app, not the
            technology side. I redid everything again, sticking with a stronger
            color I felt would match the purpose of the app nicely: a
            combination of environment and technology. It’s really helpful that
            I found some color palettes on Pinterest that best suited the app,
            and I made the necessary changes. Thankfully, the respondents found
            the new color palette visually appealing.
          </p>
        </div>
        <div className="flex flex-col gap-4 rounded-lg bg-[#3A2B6D]  p-10">
          <h2 className="text-white text-start lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-semibold">
            {" "}
            What could be improved:
          </h2>
          <p className="text-slate-300 text-start lg:text-lg md:text-md sm:text-md text-md">
            {" "}
            It would be more on the flow of the prototype. I had a green color
            palette, blue, and violet palettes (made in that order) all in one
            Figma file. However, since I just copy-pasted the components from
            one palette to another, there are times that buttons on the violet
            palette would redirect to the green palette version of the
            prototype, which should not be the case. This even happened during
            the feedbacking process, which caused confusion on our respondents.
            We cleared this up already during the final presentation.
            <br /> <br /> Another thing also is that, the question of users who
            might want to get money after giving out their broken devices. This
            was brought up during the final presentation, and how we intend to
            resolve this issue would be to have it in a bidding style, where a
            user can enter a device with an accurate description of the device’s
            condition, and the app will give a price estimate on how much money
            they could get from it and shops that could potentially buy those
            items. This will be implemented on the prototype in further
            iterations.
          </p>
        </div>
        <div className="flex flex-col gap-4 rounded-lg bg-[#3A2B6D]  p-10">
          <h2 className="text-white text-start lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-semibold">
            {" "}
            Any unexpected insights:{" "}
          </h2>
          <p className="text-slate-300 text-start lg:text-lg md:text-md sm:text-md text-md">
            {" "}
            Overall, the entire ideation process was a great way to start the
            process of making an app. This way, developers would not be
            overwhelmed on what features or what screens they would need to add
            in their app, since everything has been set up already by the system
            makers and the UI/UX designers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reflection;
