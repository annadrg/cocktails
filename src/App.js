import "./App.css";
import { Switch, Route } from "react-router-dom";
import CocktailPage from "./pages/CocktailPage";
import RandomCocktail from "./pages/RandomCocktail";
import CocktailCategories from "./pages/CocktailCategories/CocktailCategories";
import CocktailIngredients from "./pages/CocktailIngredients";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/category/:category" component={CategoryPage} />
        <Route path="/cocktail/:cocktail" component={CocktailPage} />
        <Route path="/random" component={RandomCocktail} />
        <Route path="/ingredients" component={CocktailIngredients} />
        <Route path="/" component={CocktailCategories} />
      </Switch>
    </div>
  );
}

export default App;
