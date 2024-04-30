import React, { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import profile from "../assets/image.png";
import AboutMe from "./AboutMe";
import { Link } from "react-router-dom";
import Experiences from "./Experiences";
import Portfolio from "./Portfolio";

function Landing() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const navbarElement = document.querySelector(".navbar"); // Adjust selector
    if (navbarElement) {
      setNavbarHeight(navbarElement.offsetHeight);
    }
  }, []);
  return (
    <div className="flex flex-col gap-3 min-h-screen">
      <div className="mt-10 px-20 h-screen border-2 flex flex-row align-center items-center">
        <div className="flex flex-col w-1/2 content-center gap-20">
          <div className="intro">
            {/* <h1 className="text-7xl text-white">
              Hi, I'm <span className="text-[#97EFE9]">Alex</span>
            </h1>
            <h1 className="text-4xl text-white mt-2">
              Data. Developer. Designer.
            </h1> */}
          </div>

          <div className="flex flex-row gap-2">
            <Link to="https://www.facebook.com/sandy.abainza/">
              <SocialIcon
                network="facebook"
                bgColor="#97EFE9"
                fgColor="#32333D"
                style={{ height: 35, width: 35 }}
              />
            </Link>
            <Link to="https://www.instagram.com/">
              <SocialIcon
                network="instagram"
                bgColor="#97EFE9"
                fgColor="#32333D"
                style={{ height: 35, width: 35 }}
              />
            </Link>

            <Link to="https://github.com/alexabainza">
              <SocialIcon
                network="github"
                bgColor="#97EFE9"
                fgColor="#32333D"
                style={{ height: 35, width: 35 }}
              />
            </Link>
            <Link to="https://www.linkedin.com/in/alex-abainza-321867220/">
              <SocialIcon
                network="linkedin"
                bgColor="#97EFE9"
                fgColor="#32333D"
                style={{ height: 35, width: 35 }}
              />
            </Link>
          </div>
        </div>
        {/* <div className="text-white w-1/2">
          <img src={profile} className="h-full w-full"></img>
        </div> */}
      </div>
      <AboutMe />
      <Experiences />
    </div>
  );
}

export default Landing;
