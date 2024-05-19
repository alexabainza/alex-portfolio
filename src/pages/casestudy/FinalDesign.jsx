import React from "react";
import image from "../../assets/ApptiveMain.png";
import { Link } from "react-router-dom";
import { FaCode, FaBrush, FaPlay } from "react-icons/fa";

const FinalDesign = () => {
  return (
    <div className="w-full flex flex-col gap-10 h-screen p-20 border-b-2 border-b-gray-500">
      <span className="font-bold text-white text-7xl text-center">
        Final <span className="text-[#C1D5FE]">Design</span>
      </span>

      <div className="flex gap-4">
        <img src={image} className="h-full w-[60%] object-cover rounded-2xl " />
        <div className="p-8 gap-5 flex flex-col">
          <p className="text-white text-lg font-light">
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
              className="gap-3 text-gray-400 hover:text-gray-100 flex items-center text-lg"
            >
              <FaBrush style={{ color: "white", fontSize: "20px" }} />
              View the UI here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinalDesign;
