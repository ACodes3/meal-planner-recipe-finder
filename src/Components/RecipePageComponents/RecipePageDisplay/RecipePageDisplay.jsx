import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import HealthyDish from "../../../Images/zucchini-pasta-red-sauce-sauteed-vegetables-zucchini-carrot-onion-garlic-tomatoes.jpg";

const RecipePageDisplay = () => {
  return (
    <div style={{ marginRight:"20px", fontFamily: "'Oswald', sans-serif"  }}>
        <Form className="w-100 mb-5">
        <Row className="gx-2">
          <Col>
            <Form.Control type="text" placeholder="Search" />
          </Col>
          <Col xs="auto" className="d-flex justify-content-between align-items-center gap-2">
            <Button type="submit">Search</Button>
            <Button type="submit" variant="warning">Advanced Search</Button>
          </Col>
        </Row>
      </Form>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "'Oswald', sans-serif",
          gap:"10px",
        }}
      >
        <Card style={{ width: "400px", marginBottom: "10px" }}>
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
        <Card style={{ width: "400px", marginBottom: "10px" }}>
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
        <Card style={{ width: "400px", marginBottom: "10px" }}>
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
        <Card style={{ width: "400px", marginBottom: "10px" }}>
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
        <Card style={{ width: "400px", marginBottom: "10px" }}>
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
        <Card style={{ width: "400px", marginBottom: "10px" }}>
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

export default RecipePageDisplay;
