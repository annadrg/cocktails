import React, { useEffect, useState } from "react";
import axios from "axios";
import IngredientCard from "../../components/IngredientCard/IngredientCard";
import "./CocktailIngredients.scss";

export default function CocktailIngredients() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`)
        .then((response) => {
          setIngredients(response.data.drinks);
        });
    };
    fetchData();
  }, []);

  const listOfIngredients = ingredients.map((ing, index) => {
    return <IngredientCard key={index} name={ing.strIngredient1} />;
  });

  return <div className="listOfIngredients row">{listOfIngredients}</div>;
}
