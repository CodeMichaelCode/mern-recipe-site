import axios from "axios";
import React, { useEffect, useState } from "react";
import StyledTopRecipes from "./styles/TopRecipes.styled";
import { Link } from "react-router-dom";
import { CaretRightCircle } from "@styled-icons/boxicons-solid/";
import { QuoteLeft, QuoteRight } from "@styled-icons/fa-solid/";

const TopRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const sendTopRequest = async () => {
    const res = await axios
      .get("https://node-recipebookmark.herokuapp.com/recipe/top/four")
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendTopRequest().then((data) => setRecipes(data.topRecipes));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledTopRecipes>
      <section id="quote">
        <h3>
          <QuoteLeft size={"200"} className="quoteLeft" />A recipe has no soul.
          You as the cook must bring soul to the&nbsp;recipe.
          <span>– Thomas Keller</span>
          <QuoteRight size={"200"} className="quoteRight" />
        </h3>
      </section>
      <section>
        <h2> Top Recipes</h2>
        <div id="fourSquares">
          {recipes &&
            recipes.map((recipe, i) => (
              <article key={i}>
                <img src={recipe.images} alt={recipe.title} />
                <p>{recipe.title}</p>
                <Link to={`/recipe/${recipe._id}`}>
                  {" "}
                  <CaretRightCircle size={"23"} /> View
                </Link>
              </article>
            ))}
        </div>
      </section>
    </StyledTopRecipes>
  );
};

export default TopRecipes;
