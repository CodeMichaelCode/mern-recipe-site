import styledComponents from "styled-components";

const StyledRecipeCard = styledComponents.article`
    background: #fff;
    border-radius: 8px;
    padding: 5px;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 2px 20px ${({ theme }) => theme.primaryGrey};
    height: 100%;
    cursor: pointer;
    transition: 300ms ease all;

    img {
        height: 250px;
        width: 100%;
        object-fit: cover;
        border-radius: 8px;
    }

    .cardInfo {
        margin-top: 15px;
        padding: 0px 20px;
    }

    span {
        margin-right: 15px;
        vertical-align: bottom;
        font-size: 17px;
    }
    
    span svg {
        margin-right: 10px;
    }
    
    .mealType{
        border-radius: 18px;
        padding: 5px 10px;
        color: #fff;
    }

    .timeToCook {
        color: ${({ theme }) => theme.primaryGrey};
    }

    .likes svg {
        color: #c30d0d;
    }

    h3 {
        margin-top: 15px;
        font-size: 22px;
        color: #000;
    }

    a {
        font-family: inherit;
        font-weight: bold;
        font-size: 16px;
        margin: 16px;
        border: 2px solid ${({ theme }) => theme.primaryOrange};
        background: transparent;
        cursor: pointer;
        color: #000;
        padding: 16px;
        text-decoration: none;
        text-align: center;\
        transition: 300ms ease all;
    }

    &:hover {
        transform: scale(1.05);
    }

    &.userNotActive:hover a {
        background: ${({ theme }) => theme.primaryOrange};
        color: #fff;
    }

    .userActive:hover {
            background: ${({ theme }) => theme.primaryOrange};
            color: #fff;
    }

`;

export default StyledRecipeCard;
