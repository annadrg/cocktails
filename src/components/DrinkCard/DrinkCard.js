import React from "react";
import { Link } from "react-router-dom";
import "./DrinkCard.scss";

export default function DrinkCard(props) {
  const uriDrinkName = encodeURIComponent(props.name);
  const pageRoute = `/cocktail/${uriDrinkName}`;
  return (
    <div className="col-md-4 col-lg-3">
      <div className="card shadow-sm mb-3">
        <div className="card-body pb-0">
          <h5 className="card-title">
            <Link to={pageRoute} className="card-title">
              {props.name}
            </Link>
          </h5>
          <img className="card-image" src={props.img} alt="cocktail"></img>
        </div>
      </div>
    </div>
  );
}
