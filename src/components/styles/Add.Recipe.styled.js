import styledComponents from "styled-components";

const StyledAddRecipe = styledComponents.form`
// dessert clipart PNG Designed By Me&Art from https://pngtree.com/freepng/fast-food-seamless-background-with-ice-cream-burger-chocolate-pizza-french-fries-sweets-vector-pattern_5082565.html?sol=downref&id=bef
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0, .6);
    width: fit-content;
    margin: 40px auto;
    padding: 40px;

    
    h2, h1{
        font-size: 42px;
        margin-bottom: 20px;
        letter-spacing: 1px;
        color: ${({ theme }) => theme.primaryOrange};
    }

    label {
        font-size: 21px;
        color: #fff;
        text-align: center;
    }

    input, select, textarea {
        margin-bottom: 20px;
        padding: 10px;
        font-size: 18px;
        width: 100%;
        // max-width: 350px;
        height: fit-content;
    }

    input[type="submit"] {

        padding: 10px 15px;
        text-decoration: none;
        font-size: 18px;
        cursor: pointer;
        margin-top: 20px;
      }
  
      input[type="submit"] {
        font-family: inherit;
        font-weight: bold;
        font-size: 16px;
        margin: 16px;
        background-color: ${({ theme }) => theme.primaryOrange};     
        cursor: pointer;
        color: #fff;
        padding: 16px;
        text-decoration: none;
        text-align: center;
        border: ${({ theme }) => theme.primaryOrange};
        transition: 350ms ease all;
    }
    
    input[type="submit"]:hover {
        transform: scale(1.04);
      }
      
      input[type="submit"]:hover {
        color: #fff;
        background: #F47825;
        border-color: #fff;
      }
    

    @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
        h1 {
            font-size: 36px;
            text-align: center;
        }
    }
`;
export default StyledAddRecipe;
