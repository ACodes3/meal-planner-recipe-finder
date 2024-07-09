import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const RecipePageSidebar = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchPopularRecipes();
  }, []);

  const fetchPopularRecipes = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random`,
        {
          params: {
            apiKey: process.env.REACT_APP_API_KEY,
            number: 6, // Fetch 6 popular recipes initially
          },
        }
      );
      const popularData = response.data.recipes;
      setPopularRecipes(popularData);
    } catch (error) {
      console.error("Error fetching popular recipes:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch`,
        {
          params: {
            apiKey: process.env.REACT_APP_API_KEY,
            query: searchQuery,
            number: 9, // Maximum of 9 items to display
          },
        }
      );
      const newDisplay = response.data.results;
      setFilteredRecipes(newDisplay);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const displayRecipes =
    filteredRecipes.length > 0 ? filteredRecipes : popularRecipes;

  const truncateSummary = (summary) => {
    if (!summary) return ""; // Check if summary is undefined or null

    const cleanSummary = summary.replace(/<[^>]+>/g, "");
    const words = cleanSummary.split(" ");

    if (words.length > 100) {
      return words.slice(0, 13).join(" ") + "...";
    }

    return cleanSummary;
  };

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
      <h3>Popular Recipes</h3>
      {popularRecipes.map((recipe) => (
        <Card key={recipe.id}>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <Card.Img variant="top" src={recipe.image} style={imgStyle} />
            <Card.Body>
              <Card.Title>{recipe.title}</Card.Title>
              <Card.Text style={{ fontWeight: "lighter" }}>
                {truncateSummary(recipe.summary)}
              </Card.Text>
            </Card.Body>
          </div>
          <Card.Footer>
            <small className="text-muted">
              Ready in {recipe.readyInMinutes} minutes
            </small>
          </Card.Footer>
        </Card>
      ))}
      <h3 className="mt-4">Latest Recipes</h3>
      {displayRecipes.map((recipe) => (
        <Card key={recipe.id}>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <Card.Img variant="top" src={recipe.image} style={imgStyle} />
            <Card.Body>
              <Card.Title>{recipe.title}</Card.Title>
              <Card.Text style={{ fontWeight: "lighter" }}>
                {truncateSummary(recipe.summary)}
              </Card.Text>
            </Card.Body>
          </div>
          <Card.Footer>
            <small className="text-muted">
              Ready in {recipe.readyInMinutes} minutes
            </small>
          </Card.Footer>
        </Card>
      ))}
    </Container>
  );
};

export default RecipePageSidebar;
