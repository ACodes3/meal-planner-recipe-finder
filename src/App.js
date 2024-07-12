import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from './Pages/HomePage';
import Recipe from './Pages/Recipe';
import RecipesPage from './Pages/RecipesPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/recipe/:id" element={<Recipe />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
