import React from "react";
import Card from "react-bootstrap/Card";
import BreakfastImg from "../../../Images/breakfast.png";

const CategoresComponent = () => {
  return (
    <div>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
          fontFamily: "'Oswald', sans-serif",
          fontSize: "3rem",
          marginBottom: "50px",
          marginTop: "50px",
        }}
      >
        Categories
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "'Oswald', sans-serif",
        }}
      >
        <Card style={{ width: "12rem", margin: "10px" }}>
          <Card.Img variant="top" src={BreakfastImg} />
          <Card.Body>
            <Card.Title>Breakfast</Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ width: "12rem", margin: "10px" }}>
          <Card.Img variant="top" src={BreakfastImg} />
          <Card.Body>
            <Card.Title>Breakfast</Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ width: "12rem", margin: "10px" }}>
          <Card.Img variant="top" src={BreakfastImg} />
          <Card.Body>
            <Card.Title>Breakfast</Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ width: "12rem", margin: "10px" }}>
          <Card.Img variant="top" src={BreakfastImg} />
          <Card.Body>
            <Card.Title>Breakfast</Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ width: "12rem", margin: "10px" }}>
          <Card.Img variant="top" src={BreakfastImg} />
          <Card.Body>
            <Card.Title>Breakfast</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CategoresComponent;
