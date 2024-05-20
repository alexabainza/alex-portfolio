import React from "react";
import lf1 from "../assets/portfolio/lovefest1.jpg";
import mms from "../assets/portfolio/mrnmssas.jpg";
import rnr from "../assets/portfolio/rnr.jpg";
import lfs1 from "../assets/portfolio/lfspeaker1.jpg";
import cc1 from "../assets/portfolio/cc1.jpg";
import rtr1 from "../assets/portfolio/rtr1.jpg";
import rtr2 from "../assets/portfolio/rtr2.jpg";

const ImageGallery = () => {
  return (
    <div>
      <div>
        <div class="grid md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-4">
          <div class="grid gap-4 gallery-image-container">
            <div>
              <img class="h-auto max-w-full rounded-lg" src={mms} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={rnr} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={lfs1} alt="" />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src={lf1} alt="" />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={rtr2} alt="" />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src={rtr1} alt="" />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                alt=""
              />
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={cc1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
