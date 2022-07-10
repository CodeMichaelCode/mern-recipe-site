// import React, { useEffect } from "react";
import StyledAddRecipe from "./styles/Add.Recipe.styled";
import StyledBGImage from "./styles/BackgroundImage.styled";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateRecipe = () => {
  const { id } = useParams();
  //   const [prevRecipeData, setPrevRecipeData] = useState();
  //   const sendPrevRequest = async () => {
  //     const res = await axios
  //       .get(`https://node-recipebookmark.herokuapp.com/recipe/${id}`)
  //       .catch((err) => console.log(err));
  //     const data = await res.data;
  //     return data;
  //   };
  //   useEffect(() => {
  //     sendPrevRequest()
  //       .then((data) => setPrevRecipeData(data.recipe.recipe))
  //       .then(() => {
  //         console.log(prevRecipeData);
  //       });
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

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
    const res = axios.put(
      `https://node-recipebookmark.herokuapp.com/recipe/update/${id}`,
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
    console.log(inputs);
    sendRequest().then((data) => console.log(data));
  };
  return (
    <StyledBGImage>
      <StyledAddRecipe onSubmit={handleSubmit}>
        <h1>Update Recipe</h1>{" "}
        <>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" onChange={handleChange} />
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
          <input
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
          />
          <label htmlFor="image">
            Image <br /> (Image Address Link)
          </label>
          <input type="text" name="images" onChange={handleChange} />
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

export default UpdateRecipe;
