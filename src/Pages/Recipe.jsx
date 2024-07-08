import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import RecipeDisplay from "../Components/RecipeComponents/RecipeDisplay";
import RecipeHeader from "../Components/RecipeComponents/RecipeHeader";
import RecipePageSidebar from "../Components/RecipePageComponents/RecipePageSidebar/RecipePageSidebar";

const Recipe = () => {
  return (
    <Container className="mb-5">
      <RecipeHeader />
      <Row className="mt-5">
        <Col sm={8}>
          <RecipeDisplay />
        </Col>
        <Col sm={4}>
          <RecipePageSidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default Recipe;
