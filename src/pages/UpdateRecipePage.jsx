import { useParams } from "react-router-dom";
import RecipeForm from "../components/RecipeForm";

export default function UpdateRecipePage() {
  const { id } = useParams();
  return (
    <>
      <RecipeForm id={id} />
    </>
  );
}
