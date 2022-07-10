import styledComponents from "styled-components";

const StyledFooter = styledComponents.footer`
    width: 80%;
    margin: 0 auto;
    padding: 20px 0;
    text-align: center;

    span {
        padding-right: 20px;
        border-right: 2px solid ${({ theme }) => theme.primaryGrey};
        font-size: 14px;
    }

    .footerLinks {
        padding-left: 20px;
    }

    .footerLinks:hover {
        color: ${({ theme }) => theme.primaryOrange};
        font-weight: bold;
        cursor: pointer;
    }

    span:last-of-type {
        border: none;
        padding-right: 0px;
    }

    @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.laptop}){
        width: 100%;
        padding: 20px;
        border-top: ${({ theme }) => theme.greySpacer};

    }

    @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}){
        text-align: left;
        span {
            display: block;
            padding: 10px 20px;
            border: none;
        }
    }
`;

export default StyledFooter;
