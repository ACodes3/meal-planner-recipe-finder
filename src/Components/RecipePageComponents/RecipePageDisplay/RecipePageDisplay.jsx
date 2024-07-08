import React from "react";
import { Col, Form, Pagination, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import HealthyDish from "../../../Images/zucchini-pasta-red-sauce-sauteed-vegetables-zucchini-carrot-onion-garlic-tomatoes.jpg";

const RecipePageDisplay = () => {
  return (
    <div style={{ marginRight: "20px", fontFamily: "'Oswald', sans-serif" }}>
      <Form className="w-100 mb-5">
        <Row className="gx-2">
          <Col>
            <Form.Control type="text" placeholder="Search" />
          </Col>
          <Col
            xs="auto"
            className="d-flex justify-content-between align-items-center gap-2"
          >
            <Button type="submit">Search</Button>
            <Button type="submit" variant="warning">
              Advanced Search
            </Button>
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
          gap: "10px",
        }}
      >
        <Card style={{ width: "400px", marginBottom: "10px" }}>
          <Card.Img variant="top" src={HealthyDish} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text style={{ fontWeight: "lighter" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between align-items-center">
            <Button variant="primary">Go to Recipe</Button>
            <Button variant="warning">Nutritional Value</Button>
          </Card.Footer>
        </Card>
        <Card style={{ width: "400px", marginBottom: "10px" }}>
          <Card.Img variant="top" src={HealthyDish} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text style={{ fontWeight: "lighter" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between align-items-center">
            <Button variant="primary">Go to Recipe</Button>
            <Button variant="warning">Nutritional Value</Button>
          </Card.Footer>
        </Card>
        <Card style={{ width: "400px", marginBottom: "10px" }}>
          <Card.Img variant="top" src={HealthyDish} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text style={{ fontWeight: "lighter" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between align-items-center">
            <Button variant="primary">Go to Recipe</Button>
            <Button variant="warning">Nutritional Value</Button>
          </Card.Footer>
        </Card>
        <Card style={{ width: "400px", marginBottom: "10px" }}>
          <Card.Img variant="top" src={HealthyDish} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text style={{ fontWeight: "lighter" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between align-items-center">
            <Button variant="primary">Go to Recipe</Button>
            <Button variant="warning">Nutritional Value</Button>
          </Card.Footer>
        </Card>
        <Card style={{ width: "400px", marginBottom: "10px" }}>
          <Card.Img variant="top" src={HealthyDish} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text style={{ fontWeight: "lighter" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between align-items-center">
            <Button variant="primary">Go to Recipe</Button>
            <Button variant="warning">Nutritional Value</Button>
          </Card.Footer>
        </Card>
        <Card style={{ width: "400px", marginBottom: "10px" }}>
          <Card.Img variant="top" src={HealthyDish} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text style={{ fontWeight: "lighter" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between align-items-center">
            <Button variant="primary">Go to Recipe</Button>
            <Button variant="warning">Nutritional Value</Button>
          </Card.Footer>
        </Card>
      </div>
      <div className="d-flex justify-content-center align-items-center align-self-center mt-4">
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </div>
  );
};

export default RecipePageDisplay;
