import React, { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";

function Landing() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbarElement = document.querySelector(".navbar"); // Adjust selector
    if (navbarElement) {
      setNavbarHeight(navbarElement.offsetHeight);
    }
  }, []);
  return (
    <div className="mt-20 mx-20 max-h-full flex flex-row align-center">
      <div className="flex flex-col align-center gap-20">
        <div className="intro">
          <h1 className="text-7xl text-white">
            Hi, I'm <span className="text-[#97EFE9]">Alex</span>
          </h1>
          <h1 className="text-4xl text-white mt-2">
            Data. Developer. Designer.
          </h1>
        </div>

        <div className="flex flex-row gap-2">
          <SocialIcon
            network="facebook"
            bgColor="white"
            fgColor="#32333D"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            network="instagram"
            bgColor="white"
            fgColor="#32333D"
            style={{ height: 40, width: 40 }}
          />

          <SocialIcon
            network="github"
            bgColor="white"
            fgColor="#32333D"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            network="linkedin"
            bgColor="white"
            fgColor="#32333D"
            style={{ height: 40, width: 40 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
