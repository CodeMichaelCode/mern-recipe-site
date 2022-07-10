import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Navigation } from "@styled-icons/fluentui-system-filled/Navigation";
import { Close } from "@styled-icons/ionicons-outline/Close";

const MobileNav = ({ handleLogout, FoodBank }) => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [menu, setMenu] = useState(false);
  return (
    <div className="MobileNav">
      {!menu && (
        <Navigation
          size="60"
          title={"Menu"}
          className="Hamburger"
          onClick={() => setMenu(!menu)}
        />
      )}

      {menu && (
        <Close
          size="60"
          title={"Menu"}
          className="Hamburger"
          onClick={() => setMenu(!menu)}
        />
      )}
      <h2>
        <Link to={"/"}>
          {" "}
          <FoodBank size="30" title="RecipeBookMark" />
          RecipeBookMark
        </Link>
      </h2>

      {menu && (
        <div>
          <h2>
            <Link to={"/"} onClick={() => menu && setMenu(!menu)}>
              {" "}
              <FoodBank size="30" title="RecipeBookMark" />
              RecipeBookMark
            </Link>
          </h2>
          <ul className="headerLinks">
            <li id="home">
              <Link to="/" onClick={() => menu && setMenu(!menu)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/recipe/all" onClick={() => menu && setMenu(!menu)}>
                All Recipes
              </Link>
            </li>
            {isLoggedIn && (
              <>
                <li>
                  <Link
                    to="/recipe/user"
                    onClick={() => menu && setMenu(!menu)}
                  >
                    My Recipes
                  </Link>
                </li>
                <li>
                  <Link to="/recipe/add" onClick={() => menu && setMenu(!menu)}>
                    Add Recipe
                  </Link>
                </li>
              </>
            )}
            {!isLoggedIn && (
              <>
                <li>
                  <Link to={"/login"} onClick={() => menu && setMenu(!menu)}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to={"/signup"} onClick={() => menu && setMenu(!menu)}>
                    Signup
                  </Link>
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
      )}
    </div>
  );
};

export default MobileNav;
