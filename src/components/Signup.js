import axios from "axios";
import StyledAuth from "./styles/Auth.styled";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: String(e.target.value),
    }));
  };

  const sendRequest = async () => {
    const res = await axios.post(
      "https://node-recipebookmark.herokuapp.com/signup",
      {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      }
    );
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => navigate("/"));
  };
  return (
    <StyledAuth onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label htmlFor="fullname">Full Name</label>
      <input type="text" name="fullname" required onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" required onChange={handleChange} />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" required onChange={handleChange} />
      <input type="submit" value="Submit" />
    </StyledAuth>
  );
};

export default Signup;
