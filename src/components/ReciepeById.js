import React from "react";
import StyledRecipeById from "./styles/ReciepeId.styled";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ListItem from "./ListItem";

const ReciepeById = () => {
  const [recipe, setRecipe] = useState();
  const { id } = useParams();
  const sendRequest = async () => {
    const res = await axios
      .get(`https://node-recipebookmark.herokuapp.com/recipe/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setRecipe(data.recipe));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <StyledRecipeById>
      {recipe && (
        <article>
          <div className="titleCol">
            <h1>{recipe.title}</h1>
            <img
              src={
                /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(recipe.images)
                  ? recipe.images
                  : "https://recipe-bookmarks.s3.amazonaws.com/food-placeholder.jpg"
              }
              alt=""
            />
          </div>
          <div className="ingredientsCol">
            <h2>Ingredients</h2>
            <ul>
              {" "}
              {recipe.ingredients.map((item, i) => (
                <ListItem key={i} item={item} />
              ))}
            </ul>
          </div>
          <div className="descriptionCol">
            <h2>Description</h2>
            <p>{recipe.description}</p>
          </div>
        </article>
      )}
    </StyledRecipeById>
  );
};

export default ReciepeById;
