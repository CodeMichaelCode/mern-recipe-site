import styledComponents from "styled-components";

const StyledHeaderNav = styledComponents.nav`

    svg{
      vertical-align: text-top;
      color: #f47825;
    }

    h2{
      background: rgb(255,255,255);
      background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(244,120,37,1) 20%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 22px;
      width: fit-content;
    }

    a, #logout, .headerLinks li {
      text-decoration: none;
      color: #000;
      padding: 10px;
      cursor: pointer;
    }

    ul {
      list-style: none;
    }
    
    li {
      display: inline-block;
      margin: 5px;
    }
    
    .MobileNav {
      display: none;
    }
    
    
    
    @media only screen and (min-width: 1150px) {
      div {
        display: grid;
        padding: 20px 40px;
        border-bottom:  ${({ theme }) => theme.greySpacer};
        grid-template-columns: 1fr;
        justify-items: center;
        align-items: center;
        grid-template-columns: 1fr 2fr 1fr;
      }
      
      .authButtons li a, #logout{
        border: 1px solid #aaa79f;
        transition: 350ms ease all;
      }
      
      .authButtons li a:hover, #logout:hover {
        color: #fff; 
        background: ${({ theme }) => theme.primaryOrange};
        border-color: ${({ theme }) => theme.primaryOrange};
      }
      
    }
    
    // ${({ theme }) => theme.breakpoints.tablet}
    
    @media only screen and (max-width: 1150px) {
      margin-top: 25px; 
      padding-left: 20px;

        .Navigation {
          display: none;
        }
        
      .MobileNav {
        display: block;
      }

      .MobileNav .Hamburger {
        position: absolute;
        top: 15px;
        right: 2%;
        cursor: pointer;
        z-index: 998;
        padding: 5px;
      }

      .MobileNav div {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        background: #efe9dc;
        padding-top: 20px;
        padding-left: 20px;
      }

      .MobileNav div, .MobileNav div ul {
        display: flex;
        flex-direction: column;
      }

      .headerLinks li {
        padding: 0;
      }

      #home {
        margin-top: 20px;
      }

      a {
         display: block;
      }

      a:hover, #logout:hover {
        color: ${({ theme }) => theme.primaryOrange};
        font-weight: bold; 
      }
    }

    @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobileM}) {
      h2 {
        font-size: 16px;
      }
      h2 svg {
        vertical-align: bottom;
      }
    }
`;

export default StyledHeaderNav;
