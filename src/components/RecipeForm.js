import React from "react";
import StyledAddRecipe from "./styles/Add.Recipe.styled";
import StyledBGImage from "./styles/BackgroundImage.styled";
import { useForm } from "react-hook-form";

const RecipeForm = ({ handleChange, handleSubmit, prevRecipeData }) => {
  const { prevRecipe } = useForm({
    defaultValues: {
      title: prevRecipeData.title,
      description: prevRecipeData.description,
      ingredients: prevRecipeData.ingredients,
      images: prevRecipeData.images,
      timeToCook: prevRecipeData.timeToCook,
    },
  });
  return (
    <StyledBGImage>
      <StyledAddRecipe onSubmit={handleSubmit}>
        {" "}
        <>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            required
            onChange={handleChange}
            ref={prevRecipe}
          />
          <label htmlFor="description">Description</label>
          <textarea
            ref={prevRecipe}
            name="description"
            required
            rows="4"
            cols="50"
            onChange={handleChange}
          ></textarea>
          <label htmlFor="ingredients">
            Ingredients <br /> (Seperate with comma)
          </label>
          <input
            ref={prevRecipe}
            type="text"
            name="ingredients"
            required
            onChange={handleChange}
          />
          <label htmlFor="timeToCook">Time To Cook</label>
          <input
            type="number"
            name="timeToCook"
            required
            onChange={handleChange}
            ref={prevRecipe}
          />
          <label htmlFor="image">
            Image <br /> (Image Address Link)
          </label>
          <input
            type="text"
            name="images"
            required
            onChange={handleChange}
            ref={prevRecipe}
          />
          <label htmlFor="mealType">Meal Type</label>
          <select name="mealType" id="mealType" onChange={handleChange}>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
          <input type="submit" value="Submit" />
        </>
      </StyledAddRecipe>
    </StyledBGImage>
  );
};

export default RecipeForm;
