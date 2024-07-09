import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Form, Pagination, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const RecipePageDisplay = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [displayedRecipes, setDisplayedRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const recipesPerPage = 10;

  useEffect(() => {
    const fetchInitialRecipes = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch`,
          {
            params: {
              apiKey: process.env.REACT_APP_API_KEY,
              number: 100, // Fetch 100 recipes initially
            },
          }
        );
        const recipes = response.data.results;
        setAllRecipes(recipes);
        localStorage.setItem("mainRecipes", JSON.stringify(recipes));
        setDisplayedRecipes(recipes.slice(0, recipesPerPage));
        setTotalPages(Math.ceil(recipes.length / recipesPerPage));
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    const storedRecipes = localStorage.getItem("mainRecipes");
    if (storedRecipes) {
      const recipes = JSON.parse(storedRecipes);
      setAllRecipes(recipes);
      setDisplayedRecipes(recipes.slice(0, recipesPerPage));
      setTotalPages(Math.ceil(recipes.length / recipesPerPage));
    } else {
      fetchInitialRecipes();
    }
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch`,
        {
          params: {
            apiKey: process.env.REACT_APP_API_KEY,
            query: searchTerm,
            number: 100, // Fetch 100 recipes based on search term
          },
        }
      );
      const filteredRecipes = response.data.results;
      setAllRecipes(filteredRecipes);
      setDisplayedRecipes(filteredRecipes.slice(0, recipesPerPage));
      setTotalPages(Math.ceil(filteredRecipes.length / recipesPerPage));
      setCurrentPage(1);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handlePageChange = async (pageNumber) => {
    setCurrentPage(pageNumber);
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch`,
        {
          params: {
            apiKey: process.env.REACT_APP_API_KEY,
            query: searchTerm,
            offset: (pageNumber - 1) * recipesPerPage,
            number: recipesPerPage,
          },
        }
      );
      const newDisplay = response.data.results;
      setDisplayedRecipes(newDisplay);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div style={{ marginRight: "20px", fontFamily: "'Oswald', sans-serif" }}>
      <Form className="w-100 mb-5" onSubmit={handleSearch}>
        <Row className="gx-2">
          <Col>
            <Form.Control
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
          <Col
            xs="auto"
            className="d-flex justify-content-between align-items-center gap-2"
          >
            <Button type="submit">Search</Button>
            <Button type="button" variant="warning">
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
        {displayedRecipes.map((recipe) => (
          <Card
            key={recipe.id}
            style={{ width: "400px", marginBottom: "10px" }}
          >
            <Card.Img variant="top" src={recipe.image} />
            <Card.Body>
              <Card.Title>{recipe.title}</Card.Title>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
              <Button
                variant="primary"
                href={`https://spoonacular.com/recipes/${recipe.id}`}
              >
                Go to Recipe
              </Button>
              <Button variant="warning">Nutritional Value</Button>
            </Card.Footer>
          </Card>
        ))}
      </div>
      <div className="d-flex justify-content-center align-items-center align-self-center mt-4">
        <Pagination>
          <Pagination.First onClick={() => handlePageChange(1)} />
          <Pagination.Prev
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          />
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() =>
              handlePageChange(Math.min(totalPages, currentPage + 1))
            }
          />
          <Pagination.Last onClick={() => handlePageChange(totalPages)} />
        </Pagination>
      </div>
    </div>
  );
};

export default RecipePageDisplay;
