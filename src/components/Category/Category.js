import React from "react";
import { Link } from "react-router-dom";
import "./Category.scss";

export default function Category(props) {
  const uriCategoryName = encodeURIComponent(props.name);
  const pageRoute = `/category/${uriCategoryName}`;
  return (
    <div className="col-lg-6">
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
