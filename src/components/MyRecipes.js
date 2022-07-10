import axios from "axios";
import React, { useEffect, useState } from "react";
import StyledAllRecipes from "./styles/AllRecipes.styled";
import RecipeCard from "./RecipeCard";
axios.defaults.withCredentials = true;

const MyRecipes = () => {
  const [userRecipes, setuserRecipes] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get(`https://node-recipebookmark.herokuapp.com/recipe/myrecipes/all`, {
        withCredentials: true,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setuserRecipes(data.recipes));
  }, []);
  return (
    <StyledAllRecipes>
      <h1>My Recipes</h1>
      <div className="recipeCardsCont">
        {userRecipes &&
          userRecipes.map((recipe, i) => (
            <div key={i}>
              <RecipeCard
                id={recipe._id}
                image={recipe.images}
                timeToCook={recipe.timeToCook}
                title={recipe.title}
                likes={recipe.likes}
                mealType={recipe.mealType}
                user={recipe.user}
              />
            </div>
          ))}
      </div>
    </StyledAllRecipes>
  );
};

export default MyRecipes;
