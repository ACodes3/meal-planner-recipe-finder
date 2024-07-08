import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardImg from "../../../Images/zucchini-pasta-red-sauce-sauteed-vegetables-zucchini-carrot-onion-garlic-tomatoes.jpg";

const RecipePageSidebar = () => {
  const imgStyle = {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    marginLeft: "15px",
  };

  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-start gap-4"
      style={{ fontFamily: "'Oswald', sans-serif" }}
    >
      <Form className="w-100">
        <Row className="gx-2">
          <Col>
            <Form.Control type="text" placeholder="Search" />
          </Col>
          <Col xs="auto">
            <Button type="submit">Search</Button>
          </Col>
        </Row>
      </Form>
      <Card>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <Card.Img variant="top" src={CardImg} style={imgStyle} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </div>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <Card.Img variant="top" src={CardImg} style={imgStyle} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </div>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <Card.Img variant="top" src={CardImg} style={imgStyle} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </div>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default RecipePageSidebar;
