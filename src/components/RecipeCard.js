import React from "react";
import StyledRecipeCard from "./styles/RecipeCard.styled";
import { Time } from "@styled-icons/boxicons-regular";
import { HeartFill } from "@styled-icons/bootstrap/HeartFill";
import { Link } from "react-router-dom";
import axios from "axios";

const RecipeCard = ({
  image,
  timeToCook,
  title,
  likes,
  mealType,
  user,
  id,
}) => {
  let mealTypeColor;
  switch (mealType) {
    case "Breakfast":
      mealTypeColor = "green";
      break;
    case "Lunch":
      mealTypeColor = "Orange";
      break;
    case "Dinner":
      mealTypeColor = "Blue";
      break;
    default:
      mealTypeColor = "red";
  }

  const handleDelete = async () => {
    const res = axios
      .delete(`https://node-recipebookmark.herokuapp.com/recipe/${id}`)
      .catch((err) => console.log(err));
    const data = res.data;
    return data;
  };

  return (
    <StyledRecipeCard className={!user && "userNotActive"}>
      <div>
        <img
          src={
            /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(image)
              ? image
              : "https://recipe-bookmarks.s3.amazonaws.com/food-placeholder.jpg"
          }
          alt={title}
        />

        <div className="cardInfo">
          <span className="mealType" style={{ backgroundColor: mealTypeColor }}>
            {mealType}
          </span>
          <span className="timeToCook">
            <Time size="23" title={"Time to Cook"} />
            {timeToCook}m
          </span>
          <span className="likes">
            <HeartFill size="21" title={"Like"} />
            {likes}
          </span>
          <h3>{title}</h3>
        </div>
      </div>
      <Link className={user && "userActive"} to={`/recipe/${id}`}>
        View
      </Link>
      {user && (
        <>
          <Link className="userActive" to={`/recipe/update/${id}`}>
            Edit
          </Link>
          <Link className="userActive" to={"#"} onClick={handleDelete}>
            Delete
          </Link>
        </>
      )}
    </StyledRecipeCard>
  );
};
export default RecipeCard;
