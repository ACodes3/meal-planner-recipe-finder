import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import HeroImg from "../Images/notebook-near-ingredients-utensils.jpg";

const Recipe = () => {
  return (
    <Container className="mb-5">
      <div
        className="position-relative"
        style={{ height: "300px", overflow: "hidden" }}
      >
        <Image
          src={HeroImg}
          className="w-100 h-100 position-absolute top-0 start-0"
          style={{ objectFit: "cover" }}
          rounded
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius:"10px" }} // dark overlay
        ></div>
        <div
          className="position-absolute top-50 start-50 translate-middle text-white text-center"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          <h1 style={{ fontSize: "4rem" }}>Recipe name</h1>
          <p>
            Discover a variety of recipes to suit every taste and preference.
            Customize your meal plan and enjoy delicious, healthy meals every
            day.
          </p>
        </div>
      </div>
      <Row className="mt-5">
        <Col sm={8}>text</Col>
        <Col sm={4}>text</Col>
      </Row>
    </Container>
  );
};

export default Recipe;
