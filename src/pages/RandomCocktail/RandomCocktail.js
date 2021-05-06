import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RandomCocktail.scss";
import { Button } from "react-bootstrap";

export default function RandomCocktail() {
  const [cocktailDetails, setCocktailDetails] = useState({});
  const [newCocktail, setNewCocktail] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (newCocktail) {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/random.php`
        );
        setCocktailDetails(response.data.drinks[0]);
        setNewCocktail(false);
      }
    };
    fetchData();
  }, [newCocktail]);

  const getIngredients = () => {
    const totalIngredients = [];
    for (let i = 1; i < 16; i++) {
      const ingredientNumber = `strIngredient${i}`;
      const measureNumber = `strMeasure${i}`;

      if (cocktailDetails[ingredientNumber]) {
        if (cocktailDetails[measureNumber]) {
          totalIngredients.push(
            `${cocktailDetails[measureNumber]} ${cocktailDetails[ingredientNumber]}`
          );
        } else {
          totalIngredients.push(`${cocktailDetails[ingredientNumber]}`);
        }
      }
    }
    return totalIngredients;
  };

  const name = cocktailDetails.strDrink;
  const category = cocktailDetails.strCategory;
  const img = cocktailDetails.strDrinkThumb;
  const instructions = cocktailDetails.strInstructions;
  const ingredients = getIngredients();

  const cocktailInfo = (
    <div className="cocktailHeader">
      <h2>{name}</h2>
      <h5>Category: {category}</h5>
      <div className="cocktailDetails">
        <img src={img} alt="cocktail"></img>
        <div className="details">
          <div className="ingredients">
            <h6>Ingredients</h6>
            <ul>
              {ingredients.map((ing, index) => {
                return <li key={index}>{ing}</li>;
              })}
            </ul>
          </div>
          <div className="instructions">
            <h6>instructions</h6>
            <p>{instructions}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="cocktail">{cocktailInfo}</div>
      <Button className="randomButton" onClick={() => setNewCocktail(true)}>
        New random cocktail
      </Button>
    </div>
  );
}
