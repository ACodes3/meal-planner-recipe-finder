import React from "react";
import CategoresComponent from "../Components/HomePageComponents/CategoriesComponent/CategoresComponent";
import EveryOneChef from "../Components/HomePageComponents/EveryoneChef/EveryOneChef";
import Footer from "../Components/HomePageComponents/Footer/Footer";
import HeroComponent from "../Components/HomePageComponents/HeroComponent/HeroComponent";
import NavbarComponent from "../Components/HomePageComponents/Navbar/Navbar";
import RecipesHomePage from "../Components/HomePageComponents/RecipesHomePageComponent/RecipesHomePage";

const HomePage = () => {
  return (
    <div>
      <NavbarComponent />
      <HeroComponent />
      <CategoresComponent />
      <RecipesHomePage />
      <EveryOneChef />
      <Footer />
    </div>
  );
};

export default HomePage;
