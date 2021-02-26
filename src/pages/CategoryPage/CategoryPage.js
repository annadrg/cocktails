import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DrinkIngredientCard from "../../components/DrinkIngredientCard/DrinkCard";
import "./CategoryPage.scss";

export default function CategoryPage() {
  const route_parameters = useParams();
  const currentCategory = route_parameters.category;

  const [categoryDrinks, setCategoryDrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${currentCategory}`
        )
        .then((response) => {
          setCategoryDrinks(response.data.drinks);
        });
    };
    fetchData();
  }, [currentCategory]);

  const listOfDrinks = categoryDrinks?.map((drink, index) => {
    return (
      <DrinkIngredientCard
        key={index}
        name={drink.strDrink}
        img={drink.strDrinkThumb}
      />
    );
  });

  return <div className="listOfDrinks row">{listOfDrinks}</div>;
}
