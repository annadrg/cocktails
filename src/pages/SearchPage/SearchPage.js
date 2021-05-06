import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DrinkCard from "../../components/DrinkCard/DrinkCard";
import "./SearchPage.scss";

export default function SearchPage() {
  const route_parameters = useParams();
  const currentSearchTerm = route_parameters.searchTerm;

  const [searchDrinks, setSearchDrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${currentSearchTerm}`
      );
      setSearchDrinks(response.data.drinks);
    };
    fetchData();
  }, [currentSearchTerm]);

  const listOfDrinks = searchDrinks?.map((drink, index) => {
    return (
      <DrinkCard key={index} name={drink.strDrink} img={drink.strDrinkThumb} />
    );
  });

  return (
    <div>
      <p className="mt-3 resultsFound">
        {listOfDrinks.length} results found for{" "}
        <span className="searchTerm">{currentSearchTerm}</span>
      </p>
      <div className="listOfDrinks row">{listOfDrinks}</div>
    </div>
  );
}
