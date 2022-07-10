import React from "react";
import StyledAddRecipe from "./styles/Add.Recipe.styled";
import StyledBGImage from "./styles/BackgroundImage.styled";
import { useState } from "react";
import axios from "axios";
const AddRecipe = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    ingredients: "",
    images: "",
    timeToCook: 0,
    mealType: "Breakfast",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: String(e.target.value),
    }));
  };
  const sendRequest = async () => {
    const res = axios.post(
      "https://node-recipebookmark.herokuapp.com/recipe/add",
      {
        title: inputs.title,
        description: inputs.description,
        ingredients: inputs.ingredients.split(","),
        images: inputs.images,
        timeToCook: inputs.timeToCook,
        mealType: inputs.mealType,
      },
      { withCredentials: true }
    );
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest();
    // .then((data) => console.log(data));
  };
  return (
    <StyledBGImage>
      <StyledAddRecipe onSubmit={handleSubmit}>
        <h1>Add New Recipe</h1>{" "}
        <>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" required onChange={handleChange} />
          <label htmlFor="image">
            Image <br /> (Image Address Link)
          </label>
          <input type="text" name="images" required onChange={handleChange} />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            required
            rows="4"
            cols="50"
            onChange={handleChange}
          ></textarea>
          <label htmlFor="ingredients">
            Ingredients <br /> (Seperate with comma)
          </label>
          <textarea
            name="ingredients"
            required
            rows="4"
            cols="50"
            onChange={handleChange}
          ></textarea>
          <label htmlFor="timeToCook">
            Time To Cook <br /> (In Minutes)
          </label>
          <input
            type="number"
            name="timeToCook"
            required
            onChange={handleChange}
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

export default AddRecipe;
