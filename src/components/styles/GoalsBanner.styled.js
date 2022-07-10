import styledComponents from "styled-components";

const GoalsBanner = styledComponents.section`
    border-bottom: ${({ theme }) => theme.greySpacer};
    .goalsCenter {
        width: 80%;
        margin: 0 auto;
        display: grid;
        padding: 40px 0;
        gap: 20px;
        grid-template-columns: repeat(4, 1fr);
        align-items: center;
    }

    div h3{
        color: ${({ theme }) => theme.primaryOrange};
        font-size: 48px;
        line-height: 1.2;
        font-family: ${({ theme }) => theme.headerFontFam};
    }

    p {
        color: ${({ theme }) => theme.primaryGrey};
        font-size: 18px;
    }

    @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.laptop}) {
        p {
            font-size: 16px;
        }

        .goalsCenter {
            grid-template-columns: repeat(2, 1fr);
            text-align: center;
        }
    }

    @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
          
          .goalsCenter {
              width: 100%;
              padding: 40px 40px;
        }
        
        .goalsCenter div {
            padding: 20px 0px;
        }
    }

    @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobileL}) {
        .goalsCenter {
            grid-template-columns: 1fr;
            text-align: center;
        }
    }

`;

export default GoalsBanner;
