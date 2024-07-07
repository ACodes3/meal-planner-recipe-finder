import React from "react";
import Image from "react-bootstrap/Image";
import HeroImg from "../../../Images/salad-meat-hero.jpeg";

const HeroComponent = () => {
  return (
    <div
      className="position-relative"
      style={{ height: "500px", overflow: "hidden" }}
    >
      <Image
        src={HeroImg}
        className="w-100 h-100 position-absolute top-0 start-0"
        style={{ objectFit: "cover" }}
        rounded
      />

      <div className="position-absolute top-50 start-0 end-50 translate-middle-y p-4 text-black" style={{ fontFamily: "'Oswald', sans-serif" }}>
        <div className="text-left">
          <h1 style={{fontSize: "4rem"}}>Find Your Recipe Here</h1>
          <p>
            Discover a variety of recipes to suit every taste and preference.
            Customize your meal plan and enjoy delicious, healthy meals every
            day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
