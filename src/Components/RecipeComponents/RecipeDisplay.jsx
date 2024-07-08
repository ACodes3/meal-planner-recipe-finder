import React from "react";
import { Button } from "react-bootstrap";
import {
    CalendarDate,
    Person,
    PrinterFill,
    ShareFill,
    Star,
    StarFill,
} from "react-bootstrap-icons";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const RecipeDisplay = () => {
  const starStyle = { color: "#FFD700" }; // Golden color

  return (
    <Container style={{ fontFamily: "'Oswald', sans-serif" }}>
      <Row>
        <Col
          xs={6}
          md={4}
          className="d-flex justify-content-start align-items-center gap-3"
        >
          <p>
            <CalendarDate /> Publish date
          </p>
          <p>
            <Person /> Author
          </p>
        </Col>
        <Col xs={6} md={4}>
          <p className="d-flex justify-content-start align-items-center gap-1">
            Rating:{" "}
            <StarFill style={starStyle} />
            <StarFill style={starStyle} />
            <StarFill style={starStyle} />
            <Star style={starStyle} />
            <Star style={starStyle} />
          </p>
        </Col>
        <Col
          xs={6}
          md={4}
          className="d-flex justify-content-end align-items-center gap-3"
        >
          <Button variant="light">
            <PrinterFill />
          </Button>
          <Button variant="light">
            <ShareFill />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeDisplay;
