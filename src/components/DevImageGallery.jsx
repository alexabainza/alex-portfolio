import React from "react";
import apptive from "../assets/ApptiveMain.png";
import fitness from "../assets/fitnessdemo.jpg";

import { SocialIcon } from "react-social-icons";
import GalleryImage from "./GalleryImage";

const DevImageGallery = () => {
  const portfolio = {
    details: [
      {
        title: "Apptive",
        description:
          "	Our website aims to establish itself as the go-to platform for seamless note-taking and interactive quizzing, providing an integrated solution for effective learning. We offer users the ability to capture and organize their notes effortlessly, while also allowing them to transform these notes into interactive quizzes to test their knowledge.",
        github_link: "https://github.com/alexabainza/apptive-wd",
        figma_link:
          "https://www.figma.com/file/s5YiRjVQxjsN9jP3yKfsXc/UI%2FUX-APPTIVE?type=design&node-id=347%3A27&mode=design&t=1iEzZSuR6AlImYBD-1",
        image: apptive,
        demo_link:
          "https://drive.google.com/file/d/1jaZzfNXySFXSvPYSpUIhD9HRvKUkfy28/view?usp=sharing",
        category: ["React", "ExpressJS", "NodeJS", "Bootstrap", "PHPMyAdmin"],
      },
      {
        title: "Fitness Tracking App",
        description:
          "The Fitness Tracking App's major purpose is to help users take charge of their health and fitness. The software encourages people to create and achieve fitness goals by providing an easy-to-use interface and a robust set of functions. From tracking workout progress to monitoring changes in body measures, this application is an efficient tool for anyone looking to improve their entire well-being.",
        github_link: "https://github.com/alexabainza/fitness-tracking-app",
        figma_link:
          "https://www.figma.com/file/s5YiRjVQxjsN9jP3yKfsXc/UI%2FUX-APPTIVE?type=design&node-id=347%3A27&mode=design&t=1iEzZSuR6AlImYBD-1",
        image: fitness,
        demo_link:
          "https://drive.google.com/file/d/1cKTCLJWJD9gCQcqomkmzm43cca0Rybp0/view?usp=sharing",
        category: [
          "Java Springboot",
          "React",
          "Tailwilnd",
          "NodeJS",
          "ExpressJS",
          "MySQL",
        ],
      },
    ],
  };
  return (
    <>
      <div class="gap-5">
        {portfolio.details.map((detail, index) => (
          <GalleryImage key={index} details={detail} />
        ))}
      </div>
    </>
  );
};

export default DevImageGallery;
