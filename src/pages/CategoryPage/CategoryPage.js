import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DrinkCard from "../../components/DrinkCard/DrinkCard";
import "./CategoryPage.scss";

export default function CategoryPage() {
  const route_parameters = useParams();
  const currentCategory = route_parameters.category;

  const [categoryDrinks, setCategoryDrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${currentCategory}`
      );
      setCategoryDrinks(response.data.drinks);
    };
    fetchData();
  }, [currentCategory]);

  const listOfDrinks = categoryDrinks?.map((drink, index) => {
    return (
      <DrinkCard key={index} name={drink.strDrink} img={drink.strDrinkThumb} />
    );
  });

  return <div className="listOfDrinks row">{listOfDrinks}</div>;
}
