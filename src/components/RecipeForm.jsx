import { useContext, useEffect, useState } from "react";
import DataContext from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Back from "./Back";

const RecipeForm = ({ id = null }) => {
  const { recipes, setRecipes } = useContext(DataContext);
  const navigate = useNavigate();

  // State for form inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Initialize form values if editing an existing recipe
  useEffect(() => {
    if (id !== null) {
      const recipe = recipes.find((recipe) => recipe.id === Number(id));
      if (recipe) {
        setTitle(recipe.title);
        setDescription(recipe.description);
      }
    }
  }, [id, recipes]);

  // Handle form submission
  const handleClick = (e) => {
    e.preventDefault();

    const newRecipe = {
      id: id
        ? Number(id)
        : recipes.length > 0
          ? recipes[recipes.length - 1].id + 1
          : 1,
      title,
      description,
    };

    if (id === null) {
      // Add new recipe
      setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
    } else {
      // Update existing recipe
      setRecipes((prevRecipes) =>
        prevRecipes.map((recipe) =>
          recipe.id === Number(id) ? newRecipe : recipe
        )
      );
    }

    // Navigate back to the recipe list
    navigate("/");
  };

  return (
    <form onSubmit={handleClick}>
      <Back />
      <h1>{id ? "Update Recipe Page" : "Add Recipe Page"}</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">{id ? "Update Recipe" : "Add Recipe"}</button>
    </form>
  );
};

// Prop validation
RecipeForm.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),
};

export default RecipeForm;
