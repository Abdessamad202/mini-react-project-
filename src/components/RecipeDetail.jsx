import DataContext from "../context/RecipeContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export default function RecipeDetail() {
  const {recipes} = useContext(DataContext); // Get recipes from context
  const { id } = useParams(); // Get id from URL
  const recipe = recipes.find((recipe) => recipe.id === Number(id)); // Convert id to number

  // Handle case when recipe is not found
  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  return (
    <div>
      <h1>Recipe Detail Page</h1>
      <div>Title: <strong>{recipe.title}</strong></div>
      <div>Description: <strong>{recipe.description}</strong></div>
    </div>
  );
}
