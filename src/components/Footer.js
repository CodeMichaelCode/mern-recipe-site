import React from "react";
import StyledFooter from "./styles/Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <span>&copy; 2020 RecipeBookmark Inc.</span>
      <span className="footerLinks">Support</span>
      <span className="footerLinks">Privacy Policy</span>
      <span className="footerLinks">Terms of Use</span>
      <span className="footerLinks">Cookie Policy</span>
    </StyledFooter>
  );
};

export default Footer;
