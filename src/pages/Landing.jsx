import React, { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import profile from "../assets/pfp.png";
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
    const navbarElement = document.querySelector(".navbar");
    if (navbarElement) {
      setNavbarHeight(navbarElement.offsetHeight);
    }
  }, []);
  return (
    <div className="flex flex-col gap-3 min-h-screen border-b-2 border-b-gray-500">
      <div className="lg:mt-16 md:mt-24 sm:mt-28 mt-28 lg:px-48 md:px-20 sm:px-0 px-0  lg:gap-8 md:gap-4 sm:gap-4 gap-0 min-h-screen flex lg:flex-row md:flex-col sm:flex-col flex-col align-center items-center">
        <div className="flex flex-col w-1/2 gap-8">
          <div className="intro">
            <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-6xl text-white">
              Hi, I'm <span className="text-[#C1D5FE] font-semibold">Alex</span>
            </h1>
            <h1 className="text-lg text-white mt-5">
              An aspiring full-stack developer for both Mobile and Website
              development, with experience in React Native and React JS,
              Flutter, Java, Express JS, PHPMyAdmin, and MySQL. Currently, I am
              focusing on learning MERN stack development so that I could deploy
              my projects on the web with a functioning database.{" "}
            </h1>
          </div>

          <div className="flex flex-row gap-2">
            <Link to="https://www.facebook.com/sandy.abainza/">
              <SocialIcon
                network="facebook"
                bgColor="#C1D5FE"
                fgColor="#32333D"
                style={{ height: 35, width: 35 }}
              />
            </Link>
            <Link to="https://www.instagram.com/">
              <SocialIcon
                network="instagram"
                bgColor="#C1D5FE"
                fgColor="#32333D"
                style={{ height: 35, width: 35 }}
              />
            </Link>

            <Link to="https://github.com/alexabainza">
              <SocialIcon
                network="github"
                bgColor="#C1D5FE"
                fgColor="#32333D"
                style={{ height: 35, width: 35 }}
              />
            </Link>
            <Link to="https://www.linkedin.com/in/alex-abainza-321867220/">
              <SocialIcon
                network="linkedin"
                bgColor="#C1D5FE"
                fgColor="#32333D"
                style={{ height: 35, width: 35 }}
              />
            </Link>
          </div>
        </div>
        <div className="text-white lg:w-1/2 md:w-full sm:w-full w-full flex">
          <img src={profile} className="h-full w-full"></img>
        </div>
      </div>
      <AboutMe />
      <Experiences />
    </div>
  );
}

export default Landing;
