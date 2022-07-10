import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import StyledAllRecipes from "./styles/AllRecipes.styled";
import { Link } from "react-router-dom";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("https://node-recipebookmark.herokuapp.com/recipe/all")
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    sendRequest().then((data) => setRecipes(data.recipes));
  }, []);

  return (
    <>
      <StyledAllRecipes>
        <h1>All Recipes</h1>
        <div className="recipeCardsCont">
          {recipes &&
            recipes.map((recipe, i) => (
              <Link key={i} to={`/recipe/${recipe._id}`}>
                <RecipeCard
                  id={recipe._id}
                  image={recipe.images}
                  timeToCook={recipe.timeToCook}
                  title={recipe.title}
                  likes={recipe.likes}
                  mealType={recipe.mealType}
                />
              </Link>
            ))}
        </div>
      </StyledAllRecipes>
    </>
  );
};

export default AllRecipes;
