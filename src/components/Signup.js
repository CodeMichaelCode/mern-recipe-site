import React from "react";
import StyledAuth from "./styles/Auth.styled";

const Signup = () => {
  return (
    <StyledAuth>
      <h2>Signup</h2>
      <label htmlFor="fullname">Full Name</label>
      <input type="text" name="fullname" required />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" required />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" required />
      <input type="submit" value="Submit" />
    </StyledAuth>
  );
};

export default Signup;
