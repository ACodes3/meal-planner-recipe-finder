import React from "react";
import ChefImg from "../../../Images/professional-chef-preparing-food-kitchen.jpg";

const EveryOneChef = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Oswald', sans-serif",
        marginTop:"50px",
        marginBottom:"50px",
      }}
    >
      {/* Text Grid */}
      <div style={{ flex: 1, padding: "20px", textAlign: "start" }}>
        <h2 style={{ fontSize: "3rem" }}>Everyone Can Be a Chef</h2>
        <p>
          Whether you're a beginner or an experienced cook, exploring new
          recipes and experimenting with flavors is always rewarding.
        </p>
      </div>

      {/* Image Grid */}
      <div style={{ flex: 1, textAlign: "center" }}>
        <img
          src={ChefImg}
          alt="Chef cooking"
          style={{ maxWidth: "100%", borderRadius: "8px" }}
        />
      </div>
    </div>
  );
};

export default EveryOneChef;
