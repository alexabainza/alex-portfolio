import React from "react";
import apptive from "../assets/ApptiveMain.png";

import { SocialIcon } from "react-social-icons";
import GalleryImage from "./GalleryImage";

const DevImageGallery = () => {
  const portfolio = {
    details: [
      {
        title: "Apptive",
        description:
          "Nibh ac sit venenatis quisque doloribus! A amet viverra suspendisse, eos soluta saepe, enim sollicitudin error perferendis.",
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
          "Nibh ac sit venenatis quisque doloribus! A amet viverra suspendisse, eos soluta saepe, enim sollicitudin error perferendis.",
        github_link: "https://github.com/alexabainza/fitness-tracking-app",
        figma_link:
          "https://www.figma.com/file/s5YiRjVQxjsN9jP3yKfsXc/UI%2FUX-APPTIVE?type=design&node-id=347%3A27&mode=design&t=1iEzZSuR6AlImYBD-1",
        image: apptive,
        demo_link:
          "https://drive.google.com/file/d/1jaZzfNXySFXSvPYSpUIhD9HRvKUkfy28/view?usp=sharing",
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
      <div class="grid gap-5">
        {portfolio.details.map((detail, index) => (
          <GalleryImage key={index} details={detail} />
        ))}
      </div>
    </>
  );
};

export default DevImageGallery;
