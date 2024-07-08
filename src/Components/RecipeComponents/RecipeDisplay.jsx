import React from "react";
import { Button } from "react-bootstrap";
import {
    BarChartFill,
    Book,
    BookmarksFill,
    CalendarDate,
    Eye,
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
          sm={8}
          className="d-flex justify-content-start align-items-center gap-3"
        >
          <p>
            <CalendarDate />{" "} Publish date
          </p>
          <p>
            <Person />{" "} Author
          </p>
          <p className="d-flex justify-content-start align-items-center gap-1">
            Rating:{" "} <StarFill style={starStyle} />
            <StarFill style={starStyle} />
            <StarFill style={starStyle} />
            <Star style={starStyle} />
            <Star style={starStyle} />
          </p>
        </Col>
        <Col
          sm={4}
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
      <Row>
        <Col className="d-flex justify-content-start align-items-center gap-3">
          <p>
            <BookmarksFill />{" "} Pasta
          </p>
          <p>
            <Book />{" "} Cuisine: Italian, Thai
          </p>
          <p>
            <BarChartFill />{" "} Difficulty: Easy
          </p>
          <p>
            <Eye />{" "} 1,289 Views
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeDisplay;
