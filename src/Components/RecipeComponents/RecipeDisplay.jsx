import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import {
    BarChartFill,
    Book,
    BookmarksFill,
    CalendarDate,
    ClockFill,
    EggFill,
    Eye,
    PeopleFill,
    Person,
    PrinterFill,
    ShareFill,
    Star,
    StarFill,
} from "react-bootstrap-icons";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import RecipeImg from "../../Images/recipe-1-image.jpg";

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
            <CalendarDate /> Publish date
          </p>
          <p>
            <Person /> Author
          </p>
          <p className="d-flex justify-content-start align-items-center gap-1">
            Rating: <StarFill style={starStyle} />
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
            <BookmarksFill /> Pasta
          </p>
          <p>
            <Book /> Cuisine: Italian, Thai
          </p>
          <p>
            <BarChartFill /> Difficulty: Easy
          </p>
          <p>
            <Eye /> 1,289 Views
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={RecipeImg} fluid rounded />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col sm>
          <Card>
            <Card.Body className="d-flex justify-content-around align-items-center gap-3">
              <ClockFill />
              <Card.Text>
                <p>Prep Time</p>
                <p style={{ fontSize: "12px" }}>20 Mins</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm>
          <Card>
            <Card.Body className="d-flex justify-content-around align-items-center gap-3">
              <ClockFill />
              <Card.Text>
                <p>Cook Time</p>
                <p style={{ fontSize: "12px" }}>55 Mins</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm>
          <Card>
            <Card.Body className="d-flex justify-content-around align-items-center gap-3">
              <PeopleFill />
              <Card.Text>
                <p>Serving</p>
                <p style={{ fontSize: "12px" }}>4</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm>
          <Card>
            <Card.Body className="d-flex justify-content-around align-items-center gap-3">
              <EggFill />
              <Card.Text>
                <p>Serving Size</p>
                <p style={{ fontSize: "12px" }}>Flatbread</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5 mb-5">
        <Col>
          <p className="lh-lg" style={{fontWeight:"lighter"}}>
            The doner is a Turkish creation of meat, often lamb, but not
            necessarily so, that is seasoned, stacked in a cone shape, and
            cooked slowly on a vertical rotisserie. As the outer layers of the
            meat cooks, it’s shaved off and served in a pita or other flatbread
            with vegetables and sauce. Doner is the “mother,” as it were, of
            Arabic shawarma, Mexican al pastor, and the popular Greek gyros.
            Although the sliced meat can be served on a platter with rice and
            cooked vegetables, it’s most popular as a sandwich eaten as fast
            street food. You might find tomatoes, lettuce, cucumbers, red onion,
            cucumbers, or pickles inside the pita, and the sauce might be Greek
            yogurt-based tzatziki or Middle Eastern tahini. Making an authentic
            doner kebab at home can be a bit tricky although still possible if
            you have the set up for a slow cooking vertical rotating spit. For
            most home kitchens, however, some improvisation will be required.
            But the flavors and spices will be easier to recreate than the exact
            shape. You can form ground lamb into balls and thread them on
            skewers, but the easiest way to get the sliced look of a street
            doner kebab is to make a sort of meatloaf.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeDisplay;
