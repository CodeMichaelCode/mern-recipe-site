import styledComponents from "styled-components";

const StyledAllRecipes = styledComponents.section`

    padding: 40px;
    margin-bottom: 40px;

    h1 {
        display: block;
        text-align: center;
        margin-bottom: 40px;
        font-family: ${({ theme }) => theme.headerFontFam};
        font-size: ${({ theme }) => theme.headerFontSize};
    }

    .recipeCardsCont {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 350px));
        justify-content: center;
        gap: 20px;
    }
    
    a {
        text-decoration: none;
    }
}
`;

export default StyledAllRecipes;
