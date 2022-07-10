import styledComponents from "styled-components";

const StyledRecipeById = styledComponents.div`
    padding: 60px;
    min-height: 80vh;
    
   article {
       display:grid;
       overflow: hidden;
       background: #fff;
        align-items: start;
    }
    
    article img {
        width: 100%;
        max-height: 100%;
        height: 550px;
        object-fit: cover;
        object-position: center;
    }

    div {
        height: 100%;
    }
    
    li {
        list-style: none;
        margin: 15px 0px;
        font-size: 20px;
        cursor: pointer;
    }

    .strike {
        text-decoration: line-through;
    }

    li svg {
        color: ${({ theme }) => theme.primaryGrey}
    }
    
    h1, h2 {
        text-align: center;
        font-size: 28px;
        margin: 0;
        padding: 0;
    }
    
    .titleCol{
        margin-bottom: -8px;
    }

    .descriptionCol p, .ingredientsCol ul {
        padding: 20px;
    }

    .titleCol h1 {
        background: ${({ theme }) => theme.primaryOrange};
        padding: 20px 0px;
   }

   .descriptionCol h2{
    background: #2E84EB;
    padding: 20px 10px;
   }

   .descriptionCol p {
    line-height: 2;
   }

   .ingredientsCol h2{
    background: #4FD75F;
    padding: 20px 10px;
   }

   @media only screen and (max-width: ${({ theme }) =>
     theme.breakpoints.laptop}){
        padding: 60px 0;

        article {
            width: 80%;
            margin: 0 auto; 
        }

        article img {
            width: 100%;
            // max-height: 100%;
            height: 100%;
        }

        div {
            height: auto;
        }
        
        .titleCol {
            order: 1;
        }

        .descriptionCol {
            order: 2;            
        }

        .ingredientsCol {
            order: 3;            
        }
    }
    
    @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.laptop}){
        
        article {

            grid-template-columns: 2fr 1fr 1fr;
        }

        article img {
            width: 100%;
            max-height: 100%;
            height: 550px;
        }

   }
`;
export default StyledRecipeById;
