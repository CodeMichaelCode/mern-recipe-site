import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AllRecipes from "./components/AllRecipes";
import ReciepeById from "./components/ReciepeById";
import MyRecipes from "./components/MyRecipes";
import { useSelector } from "react-redux";
import AddRecipe from "./components/AddRecipe";
import UpdateRecipe from "./components/UpdateRecipe";
import Footer from "./components/Footer";

const theme = {
  primaryOrange: "#F47825",
  greySpacer: "2px solid #aaa79f",
  primaryGrey: "#aaa79f",
  headerFontSize: "68px",
  headerFontFam: "'Oswald', sans-serif",
  breakpoints: {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
  },
};

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recipe/all" element={<AllRecipes />} />
          <Route path="/recipe/:id" element={<ReciepeById />} />
          {isLoggedIn && <Route path="/recipe/add" element={<AddRecipe />} />}
          {isLoggedIn && <Route path="/recipe/user" element={<MyRecipes />} />}
          {isLoggedIn && (
            <Route path="/recipe/update/:id" element={<UpdateRecipe />} />
          )}
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
