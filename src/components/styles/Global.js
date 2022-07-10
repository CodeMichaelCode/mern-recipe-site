import { createGlobalStyle } from "styled-components";
import Poppins400Woff2 from "../../fonts/poppins/poppins-v20-latin-regular.woff2";
import Poppins400Woff from "../../fonts/poppins/poppins-v20-latin-regular.woff";
import Poppins600Woff2 from "../../fonts/poppins/poppins-v20-latin-600.woff2";
import Poppins600Woff from "../../fonts/poppins/poppins-v20-latin-600.woff";
import Poppins800Woff2 from "../../fonts/poppins/poppins-v20-latin-800.woff2";
import Poppins800Woff from "../../fonts/poppins/poppins-v20-latin-800.woff";
import Oswald400Woff2 from "../../fonts/oswald/oswald-v48-latin-regular.woff2";
import Oswald400Woff from "../../fonts/oswald/oswald-v48-latin-regular.woff";

const GlobalStyles = createGlobalStyle`
    @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url(${Poppins400Woff2}) format('woff2'),
        url('${Poppins400Woff}') format('woff'); 
    }
    @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    src: local(''),
        url(${Poppins600Woff2}) format('woff2'),
        url(${Poppins600Woff}) format('woff'); 
    }
    @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    src: local(''),
        url(${Poppins800Woff2}) format('woff2'),
        url(${Poppins800Woff}) format('woff'); 
    }

    @font-face {
      font-family: 'Oswald';
      font-style: normal;
      font-weight: 400;
      src: local(''),
           url(${Oswald400Woff2}) format('woff2'), 
           url(${Oswald400Woff}) format('woff'); 
    }

    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    }

    body{
        background-color: #efe9dc;
        font-family: 'Poppins', sans-serif;
    }

    button {
        font-family: 'Poppins', sans-serif;
    }
`;

export default GlobalStyles;
