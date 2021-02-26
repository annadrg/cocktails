import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DrinkCard from "../../components/DrinkCard/DrinkCard";
import "./IngredientPage.scss";

export default function IngredientPage() {
  const route_parameters = useParams();
  const currentIngredient = route_parameters.ingredient;

  const [ingredientDrinks, setIngredientDrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${currentIngredient}`
        )
        .then((response) => {
          setIngredientDrinks(response.data.drinks);
        });
    };
    fetchData();
  }, [currentIngredient]);

  const listOfDrinks = ingredientDrinks?.map((drink, index) => {
    return (
      <DrinkCard key={index} name={drink.strDrink} img={drink.strDrinkThumb} />
    );
  });

  return <div className="listOfDrinks row">{listOfDrinks}</div>;
}
