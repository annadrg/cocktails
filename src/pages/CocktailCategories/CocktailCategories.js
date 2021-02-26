import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "../../components/Category/Category";
import "./CocktailCategories.scss";

export default function CocktailCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
        .then((response) => {
          setCategories(response.data.drinks);
        });
    };
    fetchData();
  }, []);

  console.log(categories);

  const categoriesFiltered = categories.filter((cat) => {
    return cat.strCategory !== "";
  });

  const listOfCategories = categoriesFiltered.map((cat, index) => {
    return <Category key={index} name={cat.strCategory} />;
  });

  return <div className="listOfCategories row">{listOfCategories}</div>;
}