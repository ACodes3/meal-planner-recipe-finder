import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import RecipePageDisplay from "../Components/RecipePageComponents/RecipePageDisplay/RecipePageDisplay";
import RecipePageHeader from "../Components/RecipePageComponents/RecipePageHeader/RecipePageHeader";
import RecipePageSidebar from "../Components/RecipePageComponents/RecipePageSidebar/RecipePageSidebar";

const RecipesPage = () => {
  return (
    <Container className="mb-5">
      <RecipePageHeader/>
      <Row className="mt-3">
        <Col sm={8}>
          <RecipePageDisplay />
        </Col>
        <Col sm={4}>
          <RecipePageSidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default RecipesPage;
