import { useContext } from "react";
import DataContext from "../context/RecipeContext";
import { Link } from "react-router-dom";
const RecipeList = () => {
  const { recipes, setRecipes } = useContext(DataContext);
  // Handle delete action
  const handleDelete = (id) => {
    setRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.id !== id)
    );
  };

  // Render recipe rows
  const renderRows = recipes.map((recipe) => (
    <tr key={recipe.id}>
      <td>{recipe.title}</td>
      <td>{recipe.description}</td>
      <td>
        <Link to={`/update-recipe/${recipe.id}`}>
          <button type="button">Edit</button>
        </Link>
        <button type="button" onClick={() => handleDelete(recipe.id)}>
          Delete
        </button>
        <Link to={`/recipe/${recipe.id}`}>
          <button type="button">See More</button>
        </Link>
      </td>
    </tr>
  ));

  // Return the table
  return recipes.length > 0 ? (
    <table>
      <caption>
        <h3>Recipe List</h3>
      </caption>
      <Link to="/add-recipe">
        <button>add recipe</button>
      </Link>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>{renderRows}</tbody>
    </table>
  ) : (
    <p>No recipes available. Add a new recipe!</p>
  );
};

export default RecipeList;
