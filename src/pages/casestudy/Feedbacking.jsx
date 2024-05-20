import React from "react";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

const Feedbacking = () => {
  return (
    <div className="lg:px-20 md:px-16 sm:px-8 px-8  min-h-screen flex lg:flex-col md:flex-row sm:flex-col flex-col py-16 border-b-2 border-b-gray-500 gap-12">
      <p className="lg:text-8xl md:text-6xl sm:text-4xl text-4xl text-[#C1D5FE] font-semibold">
        Feedbacking and Iteration{" "}
      </p>
      <p className="text-slate-300 lg:text-2xl md:text-lg sm:text-md text-md text-start">
        The user testing took place on the morning of April 29, 2024. During
        this time, a total of 50 responses were recorded, with most of the users
        testing the prototype without the guidance of the group, while the
        others had the prototype demonstrated to them.
      </p>
      <Link
        to="https://docs.google.com/spreadsheets/d/1aMy7VekAIAtKDNMk4mn4qflmp0PItYWomsSHeCI1UKs/edit?usp=sharing"
        className="flex gap-4 justify-start"
      >
        <FaLink color="white" size={24} />
        <p className="text-gray-300 hover:underline hover:text-white lg:text-2xl md:text-lg sm:text-md text-md">
          View Feedback here
        </p>
      </Link>
      <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col gap-5">
        <div className="lg:w-1/3 sm:w-full w-full bg-[#3A2B6D] h-ful rounded-2xl lg:p-12 sm:p-8 p-8 flex flex-col gap-5">
          <h2 className="text-white text-start lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-semibold">
            Positive Feedback
          </h2>
          <ol className="list-decimal ml-5 text-slate-300 text-start lg:text-lg md:text-md sm:text-md text-md">
            <li>
              <span className="font-semibold text-[#C1D5FE] ">
                Clean and Intuitive UI.{" "}
              </span>
              Many users appreciated the clean, intuitive, and easy-to-navigate
              interface.
            </li>
            <li>
              <span className="font-semibold text-[#C1D5FE] ">
                Color Scheme.
              </span>{" "}
              The color palette and design were frequently mentioned as visually
              appealing and cohesive.
            </li>
            <li>
              {" "}
              <span className="font-semibold text-[#C1D5FE] ">
                Ease of Use.
              </span>{" "}
              Users found the app straightforward to use, with a logical flow
              and well-labeled buttons and sections.
            </li>
            <li>
              <span className="font-semibold text-[#C1D5FE] ">
                Functionality.
              </span>{" "}
              Features such as the ability to donate electronics, track
              progress, and access community forums were well-received.
            </li>
            <li>
              <span className="font-semibold text-[#C1D5FE] ">
                Innovative Concept
              </span>{" "}
              The overall purpose of the app, including proper e-waste disposal
              and educational resources, was praised.
            </li>
          </ol>{" "}
        </div>
        <div className="lg:w-1/3 sm:w-full w-full bg-[#3A2B6D] h-ful rounded-2xl lg:p-12 sm:p-8 p-8 flex flex-col gap-5">
          <h2 className="text-white text-start lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-semibold">
            Areas for Improvement
          </h2>
          <ol className="list-decimal ml-5 text-slate-300 text-start lg:text-lg md:text-md sm:text-md text-md">
            <li>
              Some respondents are concerned that older users might find the app
              challenging to navigate due to its detailed nature.
            </li>
            <li>
              A few users noted that the text could be too compressed at times,
              suggesting a need for better text spacing. They also noted that
              some of the contents of the dropdown would overlap with each
              other.
            </li>
            <li>
              There were comments about some pages feeling crowded with content,
              which could make the users feel overwhelmed.
            </li>
            <li>
              Suggestions were made to improve visual contrast for users with
              impairments.
            </li>
            <li>
              Some respondents recommended adding more interactive elements,
              such as daily collectibles or interactive dismantling tutorials to
              encourage more people to open the app.
            </li>
          </ol>{" "}
        </div>
        <div className="lg:w-1/3 sm:w-full w-full bg-[#3A2B6D] h-ful rounded-2xl p-12 flex flex-col gap-5">
          <h2 className="text-white text-start lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-semibold">
            Features that Stood out{" "}
          </h2>
          <ol className="list-decimal ml-5 text-slate-300 text-start lg:text-lg md:text-md sm:text-md text-md">
            <li>
              <span className="font-semibold text-[#C1D5FE]">
                Step-by-Step Tutorials{" "}
              </span>
              Tutorials on dismantling devices were particularly appreciated
            </li>
            <li>
              <span className="font-semibold text-[#C1D5FE] ">
                Donation Process{" "}
              </span>{" "}
              The sections on donating electronics and participating in ongoing
              projects stood out.
            </li>
            <li>
              {" "}
              <span className="font-semibold text-[#C1D5FE] ">
                Community Engagement{" "}
              </span>{" "}
              Users found the app straightforward to use, with a logical flow
              and well-labeled buttons and sections.
            </li>
            <li>
              <span className="font-semibold text-[#C1D5FE] ">
                Smooth Navigation{" "}
              </span>{" "}
              Features such as the ability to donate electronics, track
              progress, and access community forums were well-received.
            </li>
            <li>
              <span className="font-semibold text-[#C1D5FE] ">
                Innovative UI Elements.{" "}
              </span>{" "}
              Features like GPS-based coordination for recycling stations and
              expandable/collapsible tabs received positive feedback.
            </li>
          </ol>{" "}
        </div>
      </div>
    </div>
  );
};

export default Feedbacking;
