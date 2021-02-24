import "./App.css";
import { Switch, Route } from "react-router-dom";
import CocktailPage from "./pages/CocktailPage";
import RandomCocktail from "./pages/RandomCocktail";
import CocktailCategories from "./pages/CocktailCategories";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/cocktail/:cocktail_id" component={CocktailPage} />
        <Route path="/random" component={RandomCocktail} />
        <Route path="/" component={CocktailCategories} />
      </Switch>
    </div>
  );
}

export default App;
