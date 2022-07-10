import styledComponets from "styled-components";

const StyledTopRecipes = styledComponets.div`
    display: grid;
    justify-items: center;
    
    
    section {
        padding: 0px 40px;
        width: 100%;
    }
    
    #quote {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px 60px;
        line-height: 1.6;
    }

    .quoteLeft, .quoteRight {
        position: absolute;
        opacity: 0.2;
        color: ${({ theme }) => theme.primaryOrange};
    }

    .quoteLeft {
        top: -53px;
        left: -34px;
    }

    .quoteRight {
        bottom: -36px;
        right: -2px;
    }

    #quote h3 {
        font-family: ${({ theme }) => theme.headerFontFam};
        font-size: 52px;
        position: relative;
        text-align: center;
    }
    
    #quote span {
        display: block;
        font-size: 40px;
    }

    article {
        max-width: 100%;
    }

    h2 {
        text-align: center;
        margin: 20px 0px;
        padding: 20px 0;
        font-size: 42px;
        font-family: ${({ theme }) => theme.headerFontFam};
        letter-spacing: 1px;
        border-top: 2px solid ${({ theme }) => theme.primaryGrey};
        border-bottom: 2px solid ${({ theme }) => theme.primaryGrey};
    }

    #fourSquares {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
    }

    img {
        width: 100%;
        height: 250px;
        object-fit: cover;
    }

    p {
        font-size: 18px;
        margin:10px 0;
        font-weight: 600;
    }

    a {
        margin-top: 10px;
        display: block;
        text-decoration: none;
        cursor: pointer;
        font-size: 18px;
        color: ${({ theme }) => theme.primaryOrange};
        width: fit-content;
    }
    
    a svg {
        vertical-align: middle;
    }

    @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.laptop}) {
    border-bottom: ${({ theme }) => theme.greySpacer};

        grid-template-columns: repeat(2, 1fr);
        section {
            margin: 80px 0px;
        }
      }

      @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.laptop}) {
        section {
            margin: 40px 0px;
        }
        
        #quote {
            padding: 40px;
            order: 2;
        }
      }

`;

export default StyledTopRecipes;
