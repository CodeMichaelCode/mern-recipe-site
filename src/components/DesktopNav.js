import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DesktopNavigation = ({ handleLogout, FoodBank }) => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <div className="Navigation">
      <h2>
        <Link to={"/"}>
          {" "}
          <FoodBank size="30" title="RecipeBookMark" />
          RecipeBookMark
        </Link>
      </h2>
      <ul className="headerLinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/recipe/all">All Recipes</Link>
        </li>
        {isLoggedIn && (
          <>
            <li>
              <Link to="/recipe/user">My Recipes</Link>
            </li>
            <li>
              <Link to="/recipe/add">Add Recipe</Link>
            </li>
          </>
        )}
      </ul>
      <ul className="authButtons">
        {!isLoggedIn && (
          <>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/signup"}>Signup</Link>
            </li>
          </>
        )}
        {isLoggedIn && (
          <li id="logout" onClick={handleLogout}>
            Logout
          </li>
        )}
      </ul>
    </div>
  );
};

export default DesktopNavigation;
