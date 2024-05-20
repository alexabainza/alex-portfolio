import React from "react";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

const Feedbacking = () => {
  return (
    <div className="min-h-screen py-16 px-20 flex flex-col gap-8 border-b-2 border-b-gray-500">
      <h1 className="text-[#C1D5FE] text-6xl font-semibold text-center">
        Feedbacking and Iteration{" "}
      </h1>
      <p className="text-xl text-center text-white">
        The user testing took place on the morning of April 29, 2024. During
        this time, a total of 50 responses were recorded, with most of the users
        testing the prototype without the guidance of the group, while the
        others had the prototype demonstrated to them.
      </p>
      <Link
        to="https://docs.google.com/spreadsheets/d/1aMy7VekAIAtKDNMk4mn4qflmp0PItYWomsSHeCI1UKs/edit?usp=sharing"
        className="flex gap-4 justify-center"
      >
        <FaLink color="white" size={24} />
        <p className="text-white hover:underline text-xl">
          {" "}
          View Feedback here
        </p>
      </Link>
      <div className="flex gap-5">
        <div className="w-1/3 bg-[#3A2B6D] h-screen rounded-2xl p-12 flex flex-col gap-5">
          <h2 className="text-white font-semibold text-4xl text-center">
            Positive Feedback
          </h2>
          <ol className="list-decimal ml-5 text-white text-lg">
            <li>
              <span className="font-semibold text-[#C1D5FE] text-xl">
                Clean and Intuitive UI.{" "}
              </span>
              Many users appreciated the clean, intuitive, and easy-to-navigate
              interface.
            </li>
            <li>
              <span className="font-semibold text-[#C1D5FE] text-xl">
                Color Scheme.
              </span>{" "}
              The color palette and design were frequently mentioned as visually
              appealing and cohesive.
            </li>
            <li>
              {" "}
              <span className="font-semibold text-[#C1D5FE] text-xl">
                Ease of Use.
              </span>{" "}
              Users found the app straightforward to use, with a logical flow
              and well-labeled buttons and sections.
            </li>
            <li>
              <span className="font-semibold text-[#C1D5FE] text-xl">
                Functionality.
              </span>{" "}
              Features such as the ability to donate electronics, track
              progress, and access community forums were well-received.
            </li>
            <li>
              <span className="font-semibold text-[#C1D5FE] text-xl">
                Innovative Concept
              </span>{" "}
              The overall purpose of the app, including proper e-waste disposal
              and educational resources, was praised.
            </li>
          </ol>{" "}
        </div>
        <div className="w-1/3 bg-[#3A2B6D] h-screen rounded-2xl p-12 flex flex-col gap-5">
          <h2 className="text-white font-semibold text-4xl text-center">
            Areas for Improvement
          </h2>
          <ol className="list-decimal ml-5 text-white text-lg">
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
        <div className="w-1/3 bg-[#3A2B6D] h-screen rounded-2xl p-12 flex flex-col gap-5">
          <h2 className="text-white font-semibold text-4xl text-center">
            Features that Stood out{" "}
          </h2>
          <ol className="list-decimal ml-5 text-white text-lg">
            <li>
              <span className="font-semibold text-[#C1D5FE] text-xl">
                Step-by-Step Tutorials{" "}
              </span>
              Tutorials on dismantling devices were particularly appreciated
            </li>
            <li>
              <span className="font-semibold text-[#C1D5FE] text-xl">
                Donation Process{" "}
              </span>{" "}
              The sections on donating electronics and participating in ongoing
              projects stood out.
            </li>
            <li>
              {" "}
              <span className="font-semibold text-[#C1D5FE] text-xl">
                Community Engagement{" "}
              </span>{" "}
              Users found the app straightforward to use, with a logical flow
              and well-labeled buttons and sections.
            </li>
            <li>
              <span className="font-semibold text-[#C1D5FE] text-xl">
                Smooth Navigation{" "}
              </span>{" "}
              Features such as the ability to donate electronics, track
              progress, and access community forums were well-received.
            </li>
            <li>
              <span className="font-semibold text-[#C1D5FE] text-xl">
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
