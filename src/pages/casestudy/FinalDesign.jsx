import React from "react";
import image from "../../assets/ApptiveMain.png";
import { Link } from "react-router-dom";
import { FaCode, FaBrush, FaPlay } from "react-icons/fa";

const FinalDesign = () => {
  return (
    <div className="lg:px-20 md:px-16 sm:px-8 px-8  min-h-screen flex lg:flex-col md:flex-row sm:flex-col flex-col py-16 border-b-2 border-b-gray-500 gap-12">
      <p className="lg:text-8xl md:text-6xl sm:text-4xl text-4xl text-[#C1D5FE] font-semibold">
        Final <span className="text-[#C1D5FE]">Design</span>
      </p>

      <div className="flex gap-4 lg:flex-row sm:flex-col flex-col">
        <div className="gap-5 flex flex-col">
          <p className="text-slate-300 lg:text-2xl md:text-lg sm:text-md text-md text-start">
            Only a few adjustments were made for the final prototype, which were
            all related to the appearance of the app. The font was made bigger
            to enable easy reading, the icons were changed for them to be better
            suited to the page that they would navigate to, the results for
            places accepting items also displayed the distance from the users,
            as well as making sure that the contents of the dropdowns don’t
            overlap with each other: these were the most notable comments and
            changes that were applied into the next iteration of the prototype.
            <br />
            <br />
            With the comments given out from the responses, changes were
            implemented into the final prototype.
            <br />
            <br />
            <Link
              to="https://www.figma.com/proto/Hx5XrJln3T3YxXggBzPGv3/DUPLICATE-DP?node-id=488-7110&starting-point-node-id=488%3A7110&t=msIl8HJvNGVfk97B-1"
              className="flex items-center gap-3 text-gray-300 hover:underline hover:text-white lg:text-2xl md:text-lg sm:text-md text-md"
            >
              <FaBrush color="white" size={20} />
              View the final prototype here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinalDesign;
