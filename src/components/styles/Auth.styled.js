import styledComponents from "styled-components";

const StyledAuth = styledComponents.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    min-height: 84vh;


    h2{
        font-size: 42px;
        margin-bottom: 20px;
        letter-spacing: 1px;
    }

    label {
        font-size: 20px;
    }

    input {
        margin-bottom: 20px;
        padding: 10px;
        font-size: 18px;
    }

    input[type="submit"] {
        border: 1px solid #aaa79f;
        transition: 350ms ease all;
        padding: 10px 15px;
        text-decoration: none;
        background-color: #fff;
        font-size: 18px;
        cursor: pointer;
      }
  
      input[type="submit"]:hover {
        color: #fff;
        background: #F47825;
        border-color: #F47825;
      }
    `;

export default StyledAuth;
