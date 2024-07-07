import React from "react";
import CategoresComponent from "../Components/HomePageComponents/CategoriesComponent/CategoresComponent";
import EveryOneChef from "../Components/HomePageComponents/EveryoneChef/EveryOneChef";
import HeroComponent from "../Components/HomePageComponents/HeroComponent/HeroComponent";
import RecipesHomePage from "../Components/HomePageComponents/RecipesHomePageComponent/RecipesHomePage";

const HomePage = () => {
  return (
    <div>
      <HeroComponent />
      <CategoresComponent />
      <RecipesHomePage />
      <EveryOneChef />
    </div>
  );
};

export default HomePage;
