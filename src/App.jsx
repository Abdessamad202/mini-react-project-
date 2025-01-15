import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import AddRecipePage from "./pages/AddRecipePage";
import HomePage from "./pages/HomePage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import DataContext from "./context/RecipeContext";
import UpdateRecipePage from "./pages/UpdateRecipePage";

function App() {
  const [recipes, setRecipes] = useState(() => {
    // Initialize state from localStorage
    const storedRecipes = window.localStorage.getItem("recipes");
    return storedRecipes ? JSON.parse(storedRecipes) : [];
  });

  useEffect(() => {
    // Sync recipes to localStorage whenever they change
    window.localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  return (
    <DataContext.Provider value={{ recipes, setRecipes }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-recipe" element={<AddRecipePage />} />
        <Route path="/update-recipe/:id" element={<UpdateRecipePage />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
      </Routes>
    </DataContext.Provider>
  );
}

export default App;
