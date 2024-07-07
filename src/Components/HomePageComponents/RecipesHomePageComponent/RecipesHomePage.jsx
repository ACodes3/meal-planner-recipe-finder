import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import HealthyDish from "../../../Images/zucchini-pasta-red-sauce-sauteed-vegetables-zucchini-carrot-onion-garlic-tomatoes.jpg";

const RecipesHomePage = () => {
  return (
    <div style={{ margin: "20px" }}>
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
        Simple and Tasty Recipes
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
        <Card style={{ width: "25rem", margin: "20px" }}>
          <Card.Img variant="top" src={HealthyDish} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "25rem", margin: "10px" }}>
          <Card.Img variant="top" src={HealthyDish} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "25rem", margin: "10px" }}>
          <Card.Img variant="top" src={HealthyDish} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "25rem", margin: "10px" }}>
          <Card.Img variant="top" src={HealthyDish} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "25rem", margin: "10px" }}>
          <Card.Img variant="top" src={HealthyDish} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "25rem", margin: "10px" }}>
          <Card.Img variant="top" src={HealthyDish} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default RecipesHomePage;
