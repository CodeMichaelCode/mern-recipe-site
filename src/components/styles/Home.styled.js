import styledComponents from "styled-components";

const StyledHome = styledComponents.main`
    display: grid;
    grid-template-columns: 50% 50%;
    justify-items: center;
    border-bottom: ${({ theme }) => theme.greySpacer};

    .bannerText {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        padding: 40px;
        max-width: 660px;
        gap: 30px
    }

    h1 {
        text-transform: capitalize;
        font-size 68px;
        line-height: 1.2;
        font-family: 'Oswald', sans-serif;
        letter-spacing: 2px;
    }

    p {
        font-size: 18px;
        line-height: 1.3;
    }
    
    .bannerCTAs {
        display: flex;
        gap 15px;
        flex-wrap: wrap;
    }

    a {
        cursor: pointer;
        border: none;
        padding 15px 25px;
        font-weight: 600;
        text-decoration: none;
        color: black;
        min-width: 162px;
    }

    .signup {
        transition: all ease 300ms;
        background-color: ${({ theme }) => theme.primaryOrange};
    }
    
    .signup:hover {
        color: #fff;
    }
    
    .how {
        background: #fff;
    }
    
    .how:hover {
        background-color: ${({ theme }) => theme.primaryOrange};
        color: #fff;
    }

    .bannerImg {
        width: 100%;
        height: 100%;
        background-image: url("https://recipe-bookmarks.s3.amazonaws.com/cookbook.webp");
        background-position: center;
        background-size: cover;
    }

    @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.laptop}) {
        margin-top: 30px;
        h1 {
          font-size: 48px;
        }
      }

    @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet} ) {
        grid-template-rows: 2fr 1fr;
        grid-template-columns: 1fr;
        justify-items: flex-start;

    }

`;

export default StyledHome;
