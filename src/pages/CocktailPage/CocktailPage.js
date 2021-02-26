import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./CocktailPage.scss";

export default function CocktailPage() {
  const route_parameters = useParams();
  const currentCocktail = route_parameters.cocktail;

  const [cocktailDetails, setCocktailDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${currentCocktail}`
        )
        .then((response) => {
          setCocktailDetails(response.data.drinks[0]);
        });
    };
    fetchData();
  }, [currentCocktail]);

  const getIngredients = () => {
    const totalIngredients = [];
    for (let i = 1; i < 16; i++) {
      const ingredientNumber = `strIngredient${i}`;
      const measureNumber = `strMeasure${i}`;

      if (cocktailDetails[ingredientNumber]) {
        totalIngredients.push(
          `${cocktailDetails[measureNumber]} ${cocktailDetails[ingredientNumber]}`
        );
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
              {ingredients.map((ing) => {
                return <li>{ing}</li>;
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

  return <div className="cocktail">{cocktailInfo}</div>;
}
