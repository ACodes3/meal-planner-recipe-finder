import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Form, Image, Table } from "react-bootstrap";
import {
  CheckCircle,
  ClipboardHeartFill,
  ClockFill,
  CurrencyExchange,
  HeartPulseFill,
  InfoSquare,
  List,
  PeopleFill,
  Person,
  PrinterFill,
  ShareFill,
  Star,
  StarFill,
  ThreeDotsVertical,
} from "react-bootstrap-icons";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";

const RecipeDisplay = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const starStyle = { color: "#FFD700" }; // Golden color

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${process.env.REACT_APP_API_KEY}`
        );
        setRecipe(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching the recipe data", error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <Container style={{ fontFamily: "'Oswald', sans-serif" }}>
      <h2 className="mt-3 mb-3">{recipe.title}</h2>
      <Row>
        <Col
          sm={8}
          className="d-flex justify-content-start align-items-center gap-3"
        >
          <p>
            <HeartPulseFill /> {recipe.healthScore} Health Score
          </p>
          <p>
            <Person /> {recipe.sourceName || "Unknown Author"}
          </p>
          <p className="d-flex justify-content-start align-items-center gap-1">
            Spoonacular Score: <StarFill style={starStyle} />
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
          {recipe.diets.map((diet, index) => (
            <p key={index}>
              <CheckCircle /> {diet.charAt(0).toUpperCase() + diet.slice(1)}
            </p>
          ))}
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={{ width: "100%", height: "400px", overflow: "hidden" }}>
            <Image
              src={recipe.image}
              fluid
              rounded
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col sm>
          <Card>
            <Card.Body className="d-flex justify-content-around align-items-center gap-3">
              <CurrencyExchange />
              <Card.Text>
                <p>Price Per Serving</p>
                <p style={{ fontSize: "12px" }}>${recipe.pricePerServing}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm>
          <Card>
            <Card.Body className="d-flex justify-content-around align-items-center gap-3">
              <ClockFill />
              <Card.Text>
                <p>Ready In</p>
                <p style={{ fontSize: "12px" }}>{recipe.readyInMinutes} Mins</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm>
          <Card>
            <Card.Body className="d-flex justify-content-around align-items-center gap-3">
              <PeopleFill />
              <Card.Text>
                <p>Serving Size</p>
                <p style={{ fontSize: "12px" }}>{recipe.servings}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm>
          <Card>
            <Card.Body className="d-flex justify-content-around align-items-center gap-3">
              <ClipboardHeartFill />
              <Card.Text>
                <p>Weight Watchers</p>
                <p style={{ fontSize: "12px" }}>
                  {" "}
                  {recipe.weightWatcherSmartPoints}{" "}Points
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5 mb-5">
        <Col>
          <p className="lh-lg" style={{ fontWeight: "lighter" }}>
            {recipe.summary.replace(/<[^>]*>?/gm, "")}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card body>
            <p>
              <ThreeDotsVertical />
              <List /> Ingredients
            </p>
            <Card body>
              <Form>
                {recipe.extendedIngredients.map((ingredient, index) => (
                  <Form.Check
                    key={index}
                    type="checkbox"
                    label={`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`}
                    style={{ marginBottom: "10px" }}
                  />
                ))}
              </Form>
            </Card>
          </Card>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col className="mt-3">
          <h2>Directions</h2>
          <ul className="lh-lg" style={{ fontWeight: "lighter" }}>
            {recipe.analyzedInstructions[0]?.steps.map((step, index) => (
              <li key={index}>{step.step}</li>
            ))}
          </ul>
        </Col>
      </Row>
      <Row>
        <Card body>
          <p>
            <InfoSquare /> Nutrition
          </p>
          {recipe.nutrition && recipe.nutrition.nutrients ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nutrient</th>
                  <th>Amount</th>
                  <th>% Daily Value</th>
                </tr>
              </thead>
              <tbody>
                {recipe.nutrition.nutrients.map((nutrient, index) => (
                  <tr key={index}>
                    <td>{nutrient.name}</td>
                    <td>
                      {nutrient.amount} {nutrient.unit}
                    </td>
                    <td>{nutrient.percentOfDailyNeeds}%</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>No nutrition information available</p>
          )}
        </Card>
      </Row>
    </Container>
  );
};

export default RecipeDisplay;
