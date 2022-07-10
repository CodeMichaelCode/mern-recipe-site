import React from "react";
import GoalsBanner from "./styles/GoalsBanner.styled";
import StyledHome from "./styles/Home.styled";
import TopRecipes from "./TopRecipes";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <>
      <StyledHome>
        <div className="bannerText">
          <h1>
            Fun and Easy
            <br /> to track your
            <br /> favorite recipes
          </h1>
          <p>
            This app was made for the everyday kitchen warrior. It delievers
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            esse minima voluptas, molestias aliquid nemo, magnam similique
            delectus aspernatur sunt nisi, vitae nobis quasi.
          </p>
          <div className="bannerCTAs">
            {!isLoggedIn && (
              <Link to={"/signup"} className="signup">
                {" "}
                Signup Today
              </Link>
            )}
            <Link to={"/"} className="how">
              {" "}
              How it Works
            </Link>
          </div>
        </div>
        <div className="bannerImg"></div>
      </StyledHome>
      <GoalsBanner>
        <div className="goalsCenter">
          <div>
            <h3>140k</h3>
            <p>Our register memembers</p>
          </div>
          <div>
            <h3>200k+</h3>
            <p>Recipes for you to enjoy</p>
          </div>
          <div>
            <h3>100+</h3>
            <p>Master Chef recommendations</p>
          </div>
          <div>
            <h3>230+</h3>
            <p>Vendor platform partners</p>
          </div>
        </div>
      </GoalsBanner>
      <TopRecipes />
    </>
  );
};

export default Home;
