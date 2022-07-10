import React, { useEffect } from "react";
import StyledHeaderNav from "./styles/Header.styled";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store";
import axios from "axios";
import { FoodBank } from "@styled-icons/material/FoodBank";
import DesktopNavigation from "./DesktopNav";
import MobileNav from "./MobileNav";
axios.defaults.withCredentials = true;
let firstRender = true;

const Header = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sendLogoutReq = async () => {
    const res = await axios.post(
      "https://node-recipebookmark.herokuapp.com/logout",
      null,
      {
        withCredentials: true,
      }
    );
    if (res.status === 200) {
      return res;
    }
    return new Error("Unable to logout. Please try again.");
  };
  const handleLogout = () => {
    sendLogoutReq()
      .then(() => dispatch(authActions.logout()))
      .then(() => navigate("/"));
  };
  const refreshToken = async () => {
    const res = await axios
      .get("https://node-recipebookmark.herokuapp.com/refresh/", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    if (isLoggedIn && firstRender) {
      setTimeout(() => {
        firstRender = false;
        refreshToken();
      }, 5000);
      // return clearTimeout();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);
  return (
    <StyledHeaderNav>
      <DesktopNavigation handleLogout={handleLogout} FoodBank={FoodBank} />
      <MobileNav handleLogout={handleLogout} FoodBank={FoodBank} />
    </StyledHeaderNav>
  );
};

export default Header;
