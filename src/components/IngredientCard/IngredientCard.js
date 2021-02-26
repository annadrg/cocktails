import React from "react";
import { Link } from "react-router-dom";
import "./IngredientCard.scss";

export default function IngredientCard(props) {
  const uriIngredientName = encodeURIComponent(props.name);
  const pageRoute = `/ingredient/${uriIngredientName}`;
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card shadow-sm mb-3">
        <div className="card-body pb-0">
          <h5 className="card-title">
            <Link to={pageRoute} className="card-title">
              {props.name}
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
}
