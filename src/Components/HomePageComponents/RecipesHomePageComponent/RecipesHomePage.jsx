import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const RecipesHomePage = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);

  useEffect(() => {
    getPopularRecipes();
  }, []);

  const getPopularRecipes = async () => {
    const check = localStorage.getItem("recipes");

    if (check) {
      setPopularRecipes(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6`
      );
      const data = await api.json();

      localStorage.setItem("recipes", JSON.stringify(data.recipes));
      console.log(data);
      setPopularRecipes(data.recipes);
    }
  };

  const truncateSummary = (summary) => {
    const cleanSummary = summary.replace(/<[^>]+>/g, "");
    const words = cleanSummary.split(" ");
    if (words.length > 100) {
      return words.slice(0, 13).join(" ") + "...";
    }
    return cleanSummary;
  };

  return (
    <div style={{ margin: "20px", fontFamily: "'Oswald', sans-serif" }}>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
          fontFamily: "'Oswald', sans-serif",
          fontSize: "3rem",
          marginBottom: "50px",
          marginTop: "50px",
        }}
      >
        Simple and Tasty Recipes
      </h2>
      <h4
        style={{
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
          fontFamily: "'Oswald', sans-serif",
          marginBottom: "50px",
          marginTop: "50px",
        }}
      >
        Our Popular Picks
      </h4>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "'Oswald', sans-serif",
        }}
      >
        {popularRecipes.map((recipe) => (
          <Card style={{ width: "25rem", margin: "10px" }} key={recipe.id}>
            <Card.Img variant="top" src={recipe.image} />
            <Card.Body>
              <Card.Title>{recipe.title}</Card.Title>
              <Card.Text style={{ fontWeight: "lighter" }}>
                {truncateSummary(recipe.summary)}
              </Card.Text>
              <Button variant="primary" href={recipe.sourceUrl} target="_blank">
                View Recipe
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecipesHomePage;
